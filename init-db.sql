-- Create database
CREATE DATABASE IF NOT EXISTS synthotech;
USE synthotech;

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    company VARCHAR(255),
    job_title VARCHAR(255),
    industry VARCHAR(255),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create lead_services table
CREATE TABLE IF NOT EXISTS lead_services (
    lead_id INT NOT NULL,
    service_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (lead_id, service_id),
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE
);

-- Create follow_ups table
CREATE TABLE IF NOT EXISTS follow_ups (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lead_id INT NOT NULL,
    notes TEXT,
    status ENUM('pending', 'contacted', 'qualified', 'unqualified') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
);

-- Insert default services
INSERT IGNORE INTO services (name) VALUES
('AI Solutions'),
('Software Development'),
('Website Development'),
('Mobile App Development'),
('Digital Marketing'),
('Process Reengineering'),
('Business Development'),
('Enterprise Applications'),
('Staff Augmentation');

-- Create database user
CREATE USER IF NOT EXISTS 'synthotech'@'%' IDENTIFIED BY 'your-secure-password';
GRANT ALL PRIVILEGES ON synthotech.* TO 'synthotech'@'%';
FLUSH PRIVILEGES; 