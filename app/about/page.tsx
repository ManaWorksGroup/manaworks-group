'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mt-10 mb-4 text-center">About ManaWorks Group</h1>

      {/* Tagline */}
      <p className="text-lg text-purple-300 mb-10 text-center max-w-xl">
        We’re an AI-powered venture studio based in Aotearoa. Our mission is to build smart systems, intelligent tools, and scalable products that empower businesses and communities.
      </p>

      {/* About Content */}
      <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md text-center max-w-xl">
        <p className="text-base mb-4">
          ManaWorks Group brings together AI, product design, and systems thinking to help organisations scale and innovate. We operate a venture studio model — building internal ventures, client systems, and digital products.
        </p>
        <p className="text-base mb-4">
          Our ecosystem includes:
        </p>
        <ul className="list-disc list-inside text-left text-purple-300 mb-4">
          <li>ManaIQ — AI Systems Agency</li>
          <li>ManaConnect — Lead Generation Engine</li>
          <li>Next Venture — AI-first products + new ventures</li>
        </ul>
        <p className="text-base">
          We value creativity, intelligence, and practical systems — and we believe AI should serve to empower people and enhance outcomes.
        </p>
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
