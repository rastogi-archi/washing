'use client'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl mt-4 text-gray-800">Oops! Page not found.</p>
      <p className="text-gray-600 mt-2">We couldn’t find the page you were looking for.</p>
      <Link href="/" className="mt-6 inline-block px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Return Home
      </Link>
    </div>
  );
}