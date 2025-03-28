import ClientLayout from '@/components/ClientLayout';
import Footer from '@/components/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <ClientLayout>
        <main className="flex-grow">
          {children}
        </main>
      </ClientLayout>
      <Footer />
    </div>
  );
} 