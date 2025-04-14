-- Drop the table if it exists to ensure a clean creation
DROP TABLE IF EXISTS lead_follow_ups;

-- Create the lead_follow_ups table
CREATE TABLE lead_follow_ups (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lead_id BIGINT NOT NULL,
    type VARCHAR(50) NOT NULL,
    notes TEXT NOT NULL,
    next_follow_up_date DATE NOT NULL,
    created_by VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
); 