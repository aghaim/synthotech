-- Create the database
CREATE DATABASE IF NOT EXISTS synthotech;
USE synthotech;

-- Create leads table (main table for all lead information)
CREATE TABLE IF NOT EXISTS leads (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    job_title VARCHAR(255),
    industry VARCHAR(100),
    source VARCHAR(100),
    status ENUM('new', 'contacted', 'qualified', 'proposal', 'negotiation', 'closed_won', 'closed_lost') DEFAULT 'new',
    priority ENUM('low', 'medium', 'high', 'urgent') DEFAULT 'medium',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create lead_messages table (for storing contact form messages and communication history)
CREATE TABLE IF NOT EXISTS lead_messages (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    lead_id BIGINT NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
);

-- Create lead_activities table (for tracking all lead-related activities)
CREATE TABLE IF NOT EXISTS lead_activities (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    lead_id BIGINT NOT NULL,
    activity_type ENUM('email', 'call', 'meeting', 'note', 'status_change', 'other') NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
);

-- Create lead_tags table (for categorizing leads)
CREATE TABLE IF NOT EXISTS lead_tags (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    color VARCHAR(7) DEFAULT '#6B7280'
);

-- Create lead_tag_assignments table (for assigning tags to leads)
CREATE TABLE IF NOT EXISTS lead_tag_assignments (
    lead_id BIGINT NOT NULL,
    tag_id BIGINT NOT NULL,
    PRIMARY KEY (lead_id, tag_id),
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES lead_tags(id) ON DELETE CASCADE
);

-- Create lead_notes table (for storing detailed notes about leads)
CREATE TABLE IF NOT EXISTS lead_notes (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    lead_id BIGINT NOT NULL,
    note TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
);

-- Create lead_attachments table (for storing files related to leads)
CREATE TABLE IF NOT EXISTS lead_attachments (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    lead_id BIGINT NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    file_type VARCHAR(50),
    file_size INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
);

-- Create lead_follow_ups table (for scheduling follow-up activities)
CREATE TABLE IF NOT EXISTS lead_follow_ups (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    lead_id BIGINT NOT NULL,
    follow_up_date DATETIME NOT NULL,
    follow_up_type ENUM('email', 'call', 'meeting', 'other') NOT NULL,
    description TEXT,
    status ENUM('scheduled', 'completed', 'cancelled') NOT NULL DEFAULT 'scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
);

-- Create lead_custom_fields table (for storing custom field definitions)
CREATE TABLE IF NOT EXISTS lead_custom_fields (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    field_name VARCHAR(100) NOT NULL,
    field_type ENUM('text', 'number', 'date', 'select', 'multiselect') NOT NULL,
    field_options TEXT,
    is_required BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create lead_custom_field_values table (for storing custom field values)
CREATE TABLE IF NOT EXISTS lead_custom_field_values (
    lead_id BIGINT NOT NULL,
    field_id BIGINT NOT NULL,
    field_value TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (lead_id, field_id),
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
    FOREIGN KEY (field_id) REFERENCES lead_custom_fields(id) ON DELETE CASCADE
);

-- Insert some default tags
INSERT INTO lead_tags (name, color) VALUES
('Hot Lead', '#EF4444'),
('Warm Lead', '#F59E0B'),
('Cold Lead', '#3B82F6'),
('Qualified', '#10B981'),
('Unqualified', '#6B7280');

-- Insert some default custom fields
INSERT INTO lead_custom_fields (field_name, field_type, field_options, is_required) VALUES
('Annual Revenue', 'number', NULL, FALSE),
('Company Size', 'select', '1-10,11-50,51-200,201-500,501-1000,1000+', FALSE),
('Budget Range', 'select', '<$10k,$10k-$50k,$50k-$100k,$100k-$500k,$500k+', FALSE),
('Project Timeline', 'select', '<1 month,1-3 months,3-6 months,6-12 months,>12 months', FALSE); 