// src/app/page.tsx
import React from "react";
import Mega from '@/components/Mega';
import Feature from '@/components/Feature';
import Dir from '@/components/Dir';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-green-600 via-green-800 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Mega />
        <Feature />
        <Dir />
      </main>
      <Footer />
    </div>
  );
}
