-- Disable foreign key checks temporarily
SET FOREIGN_KEY_CHECKS = 0;

-- Clear all tables except users
TRUNCATE TABLE lead_activities;
TRUNCATE TABLE lead_follow_ups;
TRUNCATE TABLE lead_messages;
TRUNCATE TABLE customer_services;
TRUNCATE TABLE customer_contacts;
TRUNCATE TABLE customers;
TRUNCATE TABLE leads;
TRUNCATE TABLE services;

-- Re-enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;

-- Insert default services with price set to 0
INSERT INTO services (name, price) VALUES
('AI Solutions', 0),
('Software Development', 0),
('Website Development', 0),
('Mobile App Development', 0),
('Digital Marketing', 0),
('Process Reengineering', 0),
('Business Development', 0),
('Enterprise Applications', 0),
('Staff Augmentation', 0); 