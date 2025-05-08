'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/components/services/authService';

const RegisterPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '', role: 'user' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register(form);
      router.push('/'); // Redirect to login
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="user">User</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <span
              className="text-indigo-600 cursor-pointer"
              onClick={() => router.push('/')}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
