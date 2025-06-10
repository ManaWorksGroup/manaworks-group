"use client";
import Image from "next/image";
import Link from "next/link";

export default function RoadmapPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 to-gray-900 text-white px-4">
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
        Roadmap
      </h1>

      {/* Tagline */}
      <p className="text-lg text-purple-300 mb-8 text-center max-w-2xl">
        Our vision for building AI-powered ventures and intelligent systems.
      </p>

      {/* Roadmap Steps */}
      <div className="space-y-6 max-w-2xl w-full">
        <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md text-purple-200">
          <h2 className="text-xl font-bold mb-2">Phase 1 — Foundation (Now)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>ManaWorks Group website and brand live</li>
            <li>Core AI systems developed (ManaIQ, ManaConnect)</li>
            <li>First venture concepts in testing</li>
          </ul>
        </div>

        <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md text-purple-200">
          <h2 className="text-xl font-bold mb-2">Phase 2 — Scale Ventures (Next 3–6 Months)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Deploy AI systems with first clients</li>
            <li>Grow ManaConnect lead-gen engine</li>
            <li>Launch first NextVenture products</li>
          </ul>
        </div>

        <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md text-purple-200">
          <h2 className="text-xl font-bold mb-2">Phase 3 — Community & Ecosystem (6–12 Months)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Build community around AI ventures</li>
            <li>Partnerships and ecosystem growth</li>
            <li>Expand team and capabilities</li>
          </ul>
        </div>
      </div>

      {/* Back to Home */}
      <Link
        href="/"
        className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 mt-10"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
