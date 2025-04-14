#!/bin/bash

# Check if certbot is installed
if ! command -v certbot &> /dev/null; then
    echo "Certbot is not installed. Installing..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install certbot
    else
        sudo apt-get update
        sudo apt-get install -y certbot python3-certbot-nginx
    fi
fi

# Get domains from environment variables
PUBLIC_DOMAIN=${PUBLIC_DOMAIN:-synthotech.ai}
ADMIN_DOMAIN=${ADMIN_DOMAIN:-admin.synthotech.ai}

# Create certificates for both domains
echo "Creating SSL certificates for $PUBLIC_DOMAIN and $ADMIN_DOMAIN..."

# Create certificate for public domain
certbot certonly --standalone \
    -d $PUBLIC_DOMAIN \
    --agree-tos \
    --email admin@$PUBLIC_DOMAIN \
    --non-interactive

# Create certificate for admin domain
certbot certonly --standalone \
    -d $ADMIN_DOMAIN \
    --agree-tos \
    --email admin@$PUBLIC_DOMAIN \
    --non-interactive

# Create a directory for the certificates if it doesn't exist
mkdir -p certs

# Copy certificates to the project directory
echo "Copying certificates to project directory..."
sudo cp /etc/letsencrypt/live/$PUBLIC_DOMAIN/fullchain.pem certs/public.pem
sudo cp /etc/letsencrypt/live/$PUBLIC_DOMAIN/privkey.pem certs/public.key
sudo cp /etc/letsencrypt/live/$ADMIN_DOMAIN/fullchain.pem certs/admin.pem
sudo cp /etc/letsencrypt/live/$ADMIN_DOMAIN/privkey.pem certs/admin.key

# Set proper permissions
chmod 600 certs/*.key

echo "SSL certificates have been set up successfully!"
echo "Certificates are located in the certs directory." 