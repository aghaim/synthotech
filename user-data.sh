#!/bin/bash

# Update system
apt-get update
apt-get upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Install PM2
npm install -g pm2

# Install Nginx
apt-get install -y nginx

# Install MySQL client
apt-get install -y mysql-client

# Configure Nginx
cat > /etc/nginx/sites-available/synthotech << EOF
server {
    listen 80;
    server_name synthotech.ai www.synthotech.ai;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}

server {
    listen 443 ssl;
    server_name synthotech.ai www.synthotech.ai;

    ssl_certificate /etc/letsencrypt/live/synthotech.ai/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/synthotech.ai/privkey.pem;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable the site
ln -s /etc/nginx/sites-available/synthotech /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
systemctl restart nginx

# Create application directory
mkdir -p /var/www/synthotech

# Create .env file
cat > /var/www/synthotech/.env << EOF
NODE_ENV=production
PORT=4000
DATABASE_URL=mysql://admin:SynthotechWeb12345%$#@!@synthotech-db.cvnnxw7xw7xw.us-east-1.rds.amazonaws.com:3306/synthotech
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LdJ5xUpAAAAAKX3X3X3X3X3X3X3X3X3X3X3X3X3
RECAPTCHA_SECRET_KEY=6LdJ5xUpAAAAAKX3X3X3X3X3X3X3X3X3X3X3X3X3
EOF

# Install Certbot for SSL
apt-get install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot --nginx -d synthotech.ai -d www.synthotech.ai --non-interactive --agree-tos --email aghaimehdi@gmail.com

# Set up automatic SSL renewal
echo "0 0 * * * root certbot renew --quiet" >> /etc/cron.d/certbot

# Clone the application
cd /var/www/synthotech
git clone https://github.com/amehdi/synthotech-public.git .

# Install dependencies
npm install

# Build the application
npm run build

# Start the application with PM2
pm2 start npm --name "synthotech" -- start
pm2 save
pm2 startup 