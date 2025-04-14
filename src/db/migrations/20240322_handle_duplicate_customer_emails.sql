-- First, identify and handle duplicate customer emails
CREATE TEMPORARY TABLE duplicate_customers AS
SELECT billing_email, COUNT(*) as count
FROM customers
GROUP BY billing_email
HAVING count > 1;

-- For each duplicate email, keep only the most recent customer record
DELETE FROM customers
WHERE id IN (
    SELECT id FROM (
        SELECT c1.id
        FROM customers c1
        INNER JOIN duplicate_customers dc ON c1.billing_email = dc.billing_email
        WHERE c1.id NOT IN (
            SELECT MAX(c2.id)
            FROM customers c2
            WHERE c2.billing_email = c1.billing_email
        )
    ) AS temp
);

-- Drop the temporary table
DROP TEMPORARY TABLE IF EXISTS duplicate_customers;

-- Now add the unique constraint
ALTER TABLE customers ADD UNIQUE INDEX idx_customers_email (billing_email); 