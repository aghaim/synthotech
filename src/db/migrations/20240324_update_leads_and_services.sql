-- Make email unique in leads table
ALTER TABLE leads ADD UNIQUE INDEX idx_leads_email (email);

-- Clear test data
TRUNCATE TABLE lead_activities;
TRUNCATE TABLE lead_follow_ups;
TRUNCATE TABLE lead_messages;
TRUNCATE TABLE customer_services;
TRUNCATE TABLE customer_contacts;
TRUNCATE TABLE customers;
TRUNCATE TABLE leads;
TRUNCATE TABLE services;

-- Insert services from public site
INSERT INTO services (name) VALUES
('AI Solutions'),
('Software Development'),
('Website Development'),
('Mobile App Development'),
('Digital Marketing'),
('Process Reengineering'),
('Business Development'),
('Enterprise Applications'),
('Staff Augmentation'); 