-- Add unique constraint on email in customers table
ALTER TABLE customers ADD UNIQUE INDEX idx_customers_email (billing_email); 