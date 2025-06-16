import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 text-white px-4">
      <Image
        src="/logo.png"
        alt="ManaWorks Logo"
        width={120}
        height={120}
        className="rounded-md mb-6 shadow-lg"
      />
      <h1 className="text-5xl font-extrabold mb-4 text-center">
        ManaWorks Group
      </h1>
      <p className="text-lg max-w-2xl text-center mb-8">
        Your AI Micro-Agency — launching digital tools, automations, and AI-powered ventures to scale operations and accelerate growth.
      </p>
      <a
        href="/about"
        className="px-6 py-3 bg-white text-purple-800 font-semibold rounded-full shadow hover:bg-purple-200 transition"
      >
        Learn More
      </a>
    </main>
  );
}

