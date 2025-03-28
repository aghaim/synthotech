import { pool } from '../src/db/config';
import bcrypt from 'bcryptjs';

async function createAdminUser() {
    try {
        // Check if admin user already exists
        const [existingUsers] = await pool.execute(
            'SELECT id FROM users WHERE role = ?',
            ['admin']
        );

        if ((existingUsers as any[]).length > 0) {
            console.log('Admin user already exists');
            process.exit(0);
        }

        // Create admin user
        const password = process.env.ADMIN_PASSWORD || 'admin123!';
        const passwordHash = await bcrypt.hash(password, 10);

        await pool.execute(
            `INSERT INTO users (
                email,
                password_hash,
                first_name,
                last_name,
                role,
                is_active
            ) VALUES (?, ?, ?, ?, ?, ?)`,
            [
                'admin@synthotech.com',
                passwordHash,
                'Admin',
                'User',
                'admin',
                true
            ]
        );

        console.log('Admin user created successfully');
        console.log('Email: admin@synthotech.com');
        console.log('Password:', password);
    } catch (error) {
        console.error('Error creating admin user:', error);
    } finally {
        await pool.end();
    }
}

createAdminUser(); 