import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            email: string;
            name: string;
        }
    }
}

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET || 'your-secret-key',
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined) {
                // For development, allow any credentials
                if (process.env.NODE_ENV === 'development') {
                    return {
                        id: '1',
                        email: credentials?.email || 'admin@synthotech.ai',
                        name: 'Admin User',
                    };
                }
                // TODO: Implement proper authentication
                return null;
            }
        })
    ],
    pages: {
        signIn: '/admin/login',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        }
    },
    debug: process.env.NODE_ENV === 'development',
}; 