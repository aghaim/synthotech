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
    connectionLimit: 10,
});

// Create and export the connection pool
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'synthotech',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test database connection
async function testConnection() {
    try {
        console.log('Attempting to connect to database...');
        const connection = await db.getConnection();
        console.log('Database connected successfully');
        
        // Test a simple query
        await connection.query('SELECT 1');
        console.log('Database query test successful');
        
        connection.release();
        return true;
    } catch (error) {
        console.error('Database connection failed:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
            name: error instanceof Error ? error.name : undefined,
            code: error instanceof Error ? (error as any).code : undefined,
            errno: error instanceof Error ? (error as any).errno : undefined,
            sqlState: error instanceof Error ? (error as any).sqlState : undefined,
            sqlMessage: error instanceof Error ? (error as any).sqlMessage : undefined,
        });
        return false;
    }
}

// Initialize connection
testConnection().catch((err) => {
    console.error('Fatal database connection error:', {
        message: err instanceof Error ? err.message : 'Unknown error',
        stack: err instanceof Error ? err.stack : undefined,
        name: err instanceof Error ? err.name : undefined,
        code: err instanceof Error ? (err as any).code : undefined,
        errno: err instanceof Error ? (err as any).errno : undefined,
        sqlState: err instanceof Error ? (err as any).sqlState : undefined,
        sqlMessage: err instanceof Error ? (err as any).sqlMessage : undefined,
    });
    process.exit(1);
});

export { db }; 