'use client';

import Link from 'next/link';
import LoginPage from "@/components/layout/loginpage";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          TaskMaster
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#features" className="text-gray-700 hover:text-black">Features</Link>
          <Link href="#templates" className="text-gray-700 hover:text-black">Templates</Link>
          <Link href="/login" className="text-gray-700 hover:text-black">Login</Link>
          <Link
            href="/register"
            className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 text-sm"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
