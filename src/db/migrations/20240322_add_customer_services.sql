-- Drop existing tables if they exist
DROP TABLE IF EXISTS customer_services;
DROP TABLE IF EXISTS services;

-- Create services table for available services
CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create customer_services table for service subscriptions
CREATE TABLE customer_services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    service_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE
);

-- Insert default Synthotech services
INSERT INTO services (name, price) VALUES
('AI-Powered Lead Generation', 999.00),
('Automated Email Marketing', 499.00),
('Social Media Management', 799.00),
('Content Creation & SEO', 699.00),
('Analytics & Reporting', 399.00),
('Customer Support Automation', 599.00),
('Website Optimization', 899.00),
('CRM Integration', 799.00); 