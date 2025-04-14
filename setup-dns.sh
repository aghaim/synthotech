#!/bin/bash

# AWS Configuration
REGION="us-east-1"
DOMAIN_NAME="synthotech.ai"
HOSTED_ZONE_ID="Z062332039FKBIDK6IHYL"

# Create a temporary file for the change batch
cat > change-batch.json << EOF
{
  "Changes": [
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "@",
        "Type": "A",
        "TTL": 3600,
        "ResourceRecords": [
          {
            "Value": "$(aws ec2 describe-instances --filters "Name=tag:Name,Values=synthotech-web" --query 'Reservations[0].Instances[0].PublicIpAddress' --output text)"
          }
        ]
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "www",
        "Type": "CNAME",
        "TTL": 3600,
        "ResourceRecords": [
          {
            "Value": "synthotech.ai."
          }
        ]
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "autodiscover",
        "Type": "CNAME",
        "TTL": 3600,
        "ResourceRecords": [
          {
            "Value": "autodiscover.outlook.com."
          }
        ]
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "email",
        "Type": "CNAME",
        "TTL": 3600,
        "ResourceRecords": [
          {
            "Value": "email.secureserver.net."
          }
        ]
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "lyncdiscover",
        "Type": "CNAME",
        "TTL": 3600,
        "ResourceRecords": [
          {
            "Value": "webdir.online.lync.com."
          }
        ]
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "msoid",
        "Type": "CNAME",
        "TTL": 3600,
        "ResourceRecords": [
          {
            "Value": "clientconfig.microsoftonline-p.net."
          }
        ]
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "sip",
        "Type": "CNAME",
        "TTL": 3600,
        "ResourceRecords": [
          {
            "Value": "sipdir.online.lync.com."
          }
        ]
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "@",
        "Type": "MX",
        "TTL": 3600,
        "ResourceRecords": [
          {
            "Value": "0 synthotech-ai.mail.protection.outlook.com."
          }
        ]
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "@",
        "Type": "TXT",
        "TTL": 3600,
        "ResourceRecords": [
          {
            "Value": "\"NETORGFT18551622.onmicrosoft.com\""
          },
          {
            "Value": "\"v=spf1 include:secureserver.net -all\""
          }
        ]
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "_sip._tls",
        "Type": "SRV",
        "TTL": 3600,
        "ResourceRecords": [
          {
            "Value": "100 1 443 sipdir.online.lync.com."
          }
        ]
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "_sipfederationtls._tcp",
        "Type": "SRV",
        "TTL": 3600,
        "ResourceRecords": [
          {
            "Value": "100 1 5061 sipfed.online.lync.com."
          }
        ]
      }
    }
  ]
}
EOF

# Apply the changes
aws route53 change-resource-record-sets --hosted-zone-id $HOSTED_ZONE_ID --change-batch file://change-batch.json

# Clean up
rm change-batch.json 