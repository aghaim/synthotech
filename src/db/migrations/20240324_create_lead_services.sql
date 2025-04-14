CREATE TABLE IF NOT EXISTS lead_services (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  lead_id BIGINT NOT NULL,
  service_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
  FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE,
  UNIQUE KEY unique_lead_service (lead_id, service_id)
); 