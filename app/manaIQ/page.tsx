"use client";
import Image from "next/image";
import Link from "next/link";

export default function ManaIQPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 text-white px-4">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="ManaWorks Group Logo"
        width={160}
        height={160}
        className="mb-6 rounded-xl shadow-lg"
      />

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        ManaIQ
      </h1>

      {/* Tagline */}
      <p className="text-lg text-purple-300 mb-8 text-center max-w-2xl">
        Your AI Systems Agency — building smart tools, automations, and dashboards to scale operations and decision-making.
      </p>

      {/* What we do */}
      <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md text-left max-w-lg mb-8">
        <h2 className="text-xl font-bold mb-2">What we do</h2>
        <p className="text-sm text-purple-200">
          ManaIQ designs intelligent systems that streamline operations, connect tools, and empower decision makers with AI-powered dashboards. We specialize in automations, internal tools, and custom GPT agents built for your business.
        </p>
      </div>

      {/* Back to Home */}
      <Link
        href="/"
        className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
