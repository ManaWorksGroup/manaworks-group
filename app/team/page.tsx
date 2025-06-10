'use client';
import Image from 'next/image';

export default function TeamPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mt-10 mb-4 text-center">Meet the ManaWorks Team</h1>
      
      {/* Subtitle */}
      <p className="text-lg text-purple-300 mb-8 text-center max-w-xl">
        Our work is powered by people with purpose. Here’s who’s behind the build.
      </p>

      {/* Team Member */}
      <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md text-center max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-1">Kellie Peyroux</h2>
        <p className="text-purple-300 mb-4">Founder & Vision Lead</p>
        <p className="text-sm text-gray-300">
          Kellie is the creative force behind ManaWorks. She leads with heart, strategy, and purpose — connecting people, ideas, and systems to shape ventures that matter.
        </p>
      </div>
    </main>
  );
}
