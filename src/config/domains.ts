import { NextRequest } from 'next/server';

export const domains = {
  public: process.env.PUBLIC_DOMAIN || 'synthotech.ai',
  admin: process.env.ADMIN_DOMAIN || 'admin.synthotech.ai',
};

export function isAdminDomain(request: NextRequest): boolean {
    const host = request.headers.get('host') || '';
    return host.includes(':4001') || host.includes('admin.synthotech.ai');
}

export function isPublicDomain(request: NextRequest): boolean {
    const host = request.headers.get('host') || '';
    return host.includes(':4000') || host.includes('synthotech.ai');
}

export function getAdminUrl(path: string = ''): string {
    if (process.env.NODE_ENV === 'development') {
        return `http://localhost:4001${path}`;
    }
    return `https://admin.synthotech.ai${path}`;
}

export function getPublicUrl(path: string = ''): string {
    if (process.env.NODE_ENV === 'development') {
        return `http://localhost:4000${path}`;
    }
    return `https://synthotech.ai${path}`;
}

// For development
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isLocalhost = (host: string) => 
  host.includes('localhost') || 
  host.includes('127.0.0.1') || 
  host.includes('0.0.0.0'); 