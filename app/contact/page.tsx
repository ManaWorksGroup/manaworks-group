'use client';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white px-4">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold mt-10 mb-4 text-center">Contact ManaWorks Group</h1>

      {/* Subtitle */}
      <p className="text-lg text-purple-300 mb-8 text-center max-w-xl">
        Let’s build something smart together. Reach out to discuss AI systems, new ventures, or collaborations.
      </p>

      {/* Contact Card */}
      <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md text-center max-w-md w-full">
        <p className="mb-2"><span className="font-semibold text-purple-300">Email:</span> <a href="mailto:contact@manaworksgroup.com" className="underline hover:text-purple-400">contact@manaworksgroup.com</a></p>
        <p className="mb-2"><span className="font-semibold text-purple-300">Phone:</span> <a href="tel:021337943" className="underline hover:text-purple-400">021 337 943</a></p>
        <p className="mb-2"><span className="font-semibold text-purple-300">Based in:</span> Auckland, New Zealand</p>
      </div>

      {/* Back button */}
      <Link
        href="/"
        className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full mt-6 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
