-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    subscription_plan ENUM('basic', 'pro', 'enterprise') NOT NULL,
    billing_email VARCHAR(255) NOT NULL,
    billing_phone VARCHAR(50),
    industry VARCHAR(100),
    created_by VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create customer_contacts table
CREATE TABLE IF NOT EXISTS customer_contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    job_title VARCHAR(100),
    created_by VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

-- Add indexes for better performance
CREATE INDEX idx_customers_company_name ON customers(company_name);
CREATE INDEX idx_customers_billing_email ON customers(billing_email);
CREATE INDEX idx_customer_contacts_customer_id ON customer_contacts(customer_id);
CREATE INDEX idx_customer_contacts_email ON customer_contacts(email); 