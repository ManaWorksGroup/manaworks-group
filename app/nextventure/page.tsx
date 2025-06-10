"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 text-white px-4">
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
        About ManaWorks Group
      </h1>

      {/* Tagline */}
      <p className="text-lg text-purple-300 mb-8 text-center max-w-2xl">
        We build intelligent systems and ventures powered by AI — enabling scale, efficiency, and creativity across industries.
      </p>

      {/* About text */}
      <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md text-left max-w-2xl mb-8 text-purple-200">
        <p className="mb-4">
          ManaWorks Group is an AI-first venture builder and systems agency. We design advanced automations, internal tools, and AI-powered products to help businesses operate smarter.
        </p>
        <p className="mb-4">
          Our team is passionate about leveraging AI to unlock new opportunities — from intelligent dashboards to full AI-driven ventures.
        </p>
        <p>
          We're just getting started — and we're excited to share the journey with you.
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
