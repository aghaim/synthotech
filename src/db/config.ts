import mysql from 'mysql2/promise';

// Validate required environment variables
const requiredEnvVars = ['DB_PASSWORD'];
for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        console.error(`Missing required environment variable: ${envVar}`);
        process.exit(1);
    }
}

// Log database configuration (without sensitive data)
console.log('Database configuration:', {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    database: process.env.DB_NAME || 'synthotech',
});

// Create the connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'synthotech',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test the connection
pool.query('SELECT 1')
    .then(() => {
        console.log('Database connection successful');
    })
    .catch((error) => {
        console.error('Database connection failed:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
            name: error instanceof Error ? error.name : undefined,
            code: error instanceof Error ? (error as any).code : undefined,
            errno: error instanceof Error ? (error as any).errno : undefined,
            sqlState: error instanceof Error ? (error as any).sqlState : undefined,
            sqlMessage: error instanceof Error ? (error as any).sqlMessage : undefined,
        });
        process.exit(1);
    });

// Export both pool and db for backward compatibility
export { pool };
export const db = pool; 