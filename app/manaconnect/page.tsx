"use client";
import Image from "next/image";
import Link from "next/link";

export default function ManaConnectPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 text-white px-4">
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
        ManaConnect
      </h1>

      {/* Tagline */}
      <p className="text-lg text-purple-300 mb-8 text-center max-w-2xl">
        Your AI-Powered Lead Engine — helping businesses attract, convert, and close more qualified leads using AI-first strategies.
      </p>

      {/* What we do */}
      <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md text-left max-w-lg mb-8">
        <h2 className="text-xl font-bold mb-2">What we do</h2>
        <p className="text-sm text-purple-200">
          ManaConnect builds AI-first lead generation engines that attract, nurture, and convert high-quality leads. We blend data-driven targeting with intelligent content and automation — delivering scalable lead pipelines for your business.
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
