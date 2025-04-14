import bcrypt from 'bcryptjs';
import { pool } from '../src/db/config.js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Only load dotenv in the script
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '..', '.env') });

async function createAdminUser() {
    try {
        // Check if admin user already exists
        const [existingUsers] = await pool.execute(
            'SELECT * FROM users WHERE role = ?',
            ['admin']
        );

        if (existingUsers.length > 0) {
            console.log('Admin user already exists');
            return;
        }

        // Create admin user
        const password = process.env.ADMIN_PASSWORD || 'admin123!';
        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.execute(
            'INSERT INTO users (email, password_hash, first_name, last_name, role, is_active) VALUES (?, ?, ?, ?, ?, ?)',
            ['admin@synthotech.com', hashedPassword, 'Admin', 'User', 'admin', true]
        );

        console.log('Admin user created successfully');
    } catch (error) {
        console.error('Error creating admin user:', error);
    } finally {
        await pool.end();
    }
}

createAdminUser(); 