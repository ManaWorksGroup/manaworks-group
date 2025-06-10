"use client";
import './globals.css';

import Link from 'next/link';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-white">
        {/* Navigation */}
        <nav className="bg-gray-950 text-white sticky top-0 z-50 px-6 py-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href="/">ManaWorks</Link>
          </h1>
          <div className="flex gap-6 text-sm md:text-base">
            <Link href="/" className="hover:text-purple-300 transition duration-200">Home</Link>
            <Link href="/manaIQ" className="hover:text-purple-300 transition duration-200">ManaIQ</Link>
            <Link href="/manaconnect" className="hover:text-purple-300 transition duration-200">ManaConnect</Link>
            <Link href="/nextventure" className="hover:text-purple-300 transition duration-200">Next Venture</Link>
            <Link href="/about" className="hover:text-purple-300 transition duration-200">About</Link>
            <Link href="/contact" className="hover:text-purple-300 transition duration-200">Contact</Link>
            <Link href="/team" className="hover:text-purple-300 transition duration-200">Team</Link>
            <Link href="/roadmap" className="hover:text-purple-300 transition duration-200">Roadmap</Link>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        <footer className="py-4 text-center text-sm text-white opacity-60 bg-gray-950">
  © ManaWorks Group 2025. All rights reserved. · Contact:{" "}
  <a href="mailto:contact@manaworksgroup.com" className="underline text-white hover:text-purple-300">
    contact@manaworksgroup.com
  </a>
</footer>

      </body>
    </html>
  );
}
