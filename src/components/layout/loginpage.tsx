"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { login } from '../services/authService';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await login({ username, password });
      localStorage.setItem('token', data.token);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Illustration */}
      <div className="w-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center relative">
        <Image
          src="/images/File2.avif" // Make sure this file is in public/images/
          alt="Event"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-2/3 max-w-md">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
            Login to your account
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <span
                className="text-indigo-600 cursor-pointer"
                onClick={() => router.push('/register')}
              >
                Create Account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
