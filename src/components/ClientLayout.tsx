'use client';

import { useEffect, useState } from 'react';
import Navigation from "@/components/Navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Navigation />
      <div className={`transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </>
  );
} 