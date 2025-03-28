import { NextResponse } from 'next/server';
import { AuthService } from '@/services/authService';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            );
        }

        const authService = new AuthService();
        const user = await authService.login(email, password);

        return NextResponse.json({ user });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Invalid credentials' },
            { status: 401 }
        );
    }
} 