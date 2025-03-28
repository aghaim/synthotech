import { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
    title: 'Admin Portal - Synthotech',
    description: 'Synthotech admin portal for managing leads and content',
};

export default function AdminTemplate({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Providers>{children}</Providers>;
} 