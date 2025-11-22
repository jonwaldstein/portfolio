'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Gravatar from './Gravatar';
import Footer from './Footer';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur border-b border-gray-200 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-gray-900 font-semibold tracking-wide">Jon Waldstein</Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <Link href="/" className="flex items-center">
              <Gravatar />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white">
          <div className="px-6 py-8 overflow-y-auto h-full pt-24">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">About</p>
            <ul className="space-y-1 mb-6">
              <li>
                <Link
                  className="text-gray-700 hover:text-gray-900 hover:underline transition-duration-300"
                  href="/about"
                  onClick={() => setIsOpen(false)}
                >
                  Me
                </Link>
              </li>
            </ul>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Portfolio</p>
            <ul className="space-y-1 mb-6">
              <li>
                <Link
                  className="text-gray-700 hover:text-gray-900 hover:underline transition-duration-300"
                  href="/portfolio/plugins"
                  onClick={() => setIsOpen(false)}
                >
                  Plugins
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-700 hover:text-gray-900 hover:underline transition-duration-300"
                  href="/portfolio/websites"
                  onClick={() => setIsOpen(false)}
                >
                  Websites
                </Link>
              </li>
            </ul>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

