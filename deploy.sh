#!/bin/bash

# AWS Configuration
REGION="us-east-1"
VPC_CIDR="10.0.0.0/16"
PUBLIC_SUBNET_CIDR="10.0.1.0/24"
PRIVATE_SUBNET_CIDR="10.0.2.0/24"
DB_INSTANCE_CLASS="db.t3.micro"
EC2_INSTANCE_TYPE="t2.micro"
DOMAIN_NAME="synthotech.ai"
# Ubuntu 22.04 LTS AMI for us-east-1
AMI_ID="ami-0c7217cdde317cfec"
KEY_PAIR_NAME="synthotech-key"

# Check if key pair exists, create if it doesn't
echo "Checking for key pair..."
if ! aws ec2 describe-key-pairs --key-names $KEY_PAIR_NAME &> /dev/null; then
    echo "Creating key pair..."
    aws ec2 create-key-pair --key-name $KEY_PAIR_NAME --query 'KeyMaterial' --output text > $KEY_PAIR_NAME.pem
    chmod 400 $KEY_PAIR_NAME.pem
    echo "Key pair created and saved to $KEY_PAIR_NAME.pem"
fi

# Create VPC
echo "Creating VPC..."
VPC_ID=$(aws ec2 create-vpc --cidr-block $VPC_CIDR --query 'Vpc.VpcId' --output text)
aws ec2 create-tags --resources $VPC_ID --tags Key=Name,Value=synthotech-vpc

# Create Internet Gateway
echo "Creating Internet Gateway..."
IGW_ID=$(aws ec2 create-internet-gateway --query 'InternetGateway.InternetGatewayId' --output text)
aws ec2 attach-internet-gateway --vpc-id $VPC_ID --internet-gateway-id $IGW_ID

# Create Subnets
echo "Creating Subnets..."
PUBLIC_SUBNET_ID=$(aws ec2 create-subnet --vpc-id $VPC_ID --cidr-block $PUBLIC_SUBNET_CIDR --availability-zone ${REGION}a --query 'Subnet.SubnetId' --output text)
PRIVATE_SUBNET_ID=$(aws ec2 create-subnet --vpc-id $VPC_ID --cidr-block $PRIVATE_SUBNET_CIDR --availability-zone ${REGION}a --query 'Subnet.SubnetId' --output text)

# Create Route Table
echo "Creating Route Table..."
ROUTE_TABLE_ID=$(aws ec2 create-route-table --vpc-id $VPC_ID --query 'RouteTable.RouteTableId' --output text)
aws ec2 create-route --route-table-id $ROUTE_TABLE_ID --destination-cidr-block 0.0.0.0/0 --gateway-id $IGW_ID
aws ec2 associate-route-table --subnet-id $PUBLIC_SUBNET_ID --route-table-id $ROUTE_TABLE_ID

# Create Security Groups
echo "Creating Security Groups..."
# Web Security Group
WEB_SG_ID=$(aws ec2 create-security-group --group-name synthotech-web-sg --description "Security group for web servers" --vpc-id $VPC_ID --query 'GroupId' --output text)
aws ec2 authorize-security-group-ingress --group-id $WEB_SG_ID --protocol tcp --port 80 --cidr 0.0.0.0/0
aws ec2 authorize-security-group-ingress --group-id $WEB_SG_ID --protocol tcp --port 443 --cidr 0.0.0.0/0
aws ec2 authorize-security-group-ingress --group-id $WEB_SG_ID --protocol tcp --port 22 --cidr 0.0.0.0/0

# DB Security Group
DB_SG_ID=$(aws ec2 create-security-group --group-name synthotech-db-sg --description "Security group for database" --vpc-id $VPC_ID --query 'GroupId' --output text)
aws ec2 authorize-security-group-ingress --group-id $DB_SG_ID --protocol tcp --port 3306 --source-group $WEB_SG_ID

# Create RDS Instance
echo "Creating RDS Instance..."
aws rds create-db-instance \
    --db-instance-identifier synthotech-db \
    --db-instance-class $DB_INSTANCE_CLASS \
    --engine mysql \
    --master-username admin \
    --master-user-password "SynthotechWeb12345%$#@!" \
    --allocated-storage 20 \
    --vpc-security-group-ids $DB_SG_ID \
    --db-subnet-group-name synthotech-db-subnet-group \
    --availability-zone ${REGION}a \
    --backup-retention-period 7 \
    --multi-az false \
    --auto-minor-version-upgrade true \
    --publicly-accessible false

# Create EC2 Instance
echo "Creating EC2 Instance..."
EC2_INSTANCE_ID=$(aws ec2 run-instances \
    --image-id $AMI_ID \
    --count 1 \
    --instance-type $EC2_INSTANCE_TYPE \
    --key-name $KEY_PAIR_NAME \
    --security-group-ids $WEB_SG_ID \
    --subnet-id $PUBLIC_SUBNET_ID \
    --user-data file://user-data.sh \
    --query 'Instances[0].InstanceId' \
    --output text)

# Create S3 Bucket
echo "Creating S3 Bucket..."
aws s3api create-bucket --bucket synthotech-static-assets --region $REGION

# Create Route 53 Hosted Zone
echo "Creating Route 53 Hosted Zone..."
aws route53 create-hosted-zone --name $DOMAIN_NAME --caller-reference $(date +%s)

echo "Infrastructure setup complete!"
echo "Please note down these IDs for future reference:"
echo "VPC ID: $VPC_ID"
echo "EC2 Instance ID: $EC2_INSTANCE_ID"
echo "RDS Instance ID: synthotech-db" 