import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import Footer from '@/components/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <ClientLayout>
            <main className="flex-grow">
              {children}
            </main>
          </ClientLayout>
          <Footer />
        </div>
      </body>
    </html>
  );
} 