"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-purple-900 text-white px-4">
      {/* Starry Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff22_1px,_transparent_1px)] bg-[size:20px_20px] opacity-20 z-0" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center animate-fade-in mt-16 mb-8 px-4">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="ManaWorks Group Logo"
          width={180}
          height={180}
          className="mb-8 rounded-xl shadow-lg"
        />

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Welcome to ManaWorks Group
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-purple-300 mb-10 max-w-2xl">
          AI-Driven Ventures. Intelligent Systems. Built for Scale.
        </p>

        {/* Venture Links */}
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <Link
            href="/manaIQ"
            className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-4 rounded-full text-lg font-medium shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
          >
            Explore ManaIQ →
          </Link>
          <Link
            href="/manaconnect"
            className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-4 rounded-full text-lg font-medium shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
          >
            Explore ManaConnect →
          </Link>
          <Link
            href="/nextventure"
            className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-4 rounded-full text-lg font-medium shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
          >
            Explore Next Venture →
          </Link>
        </div>
      </div>

      {/* Fade-in Animation Keyframes */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
