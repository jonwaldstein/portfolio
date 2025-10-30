"use client";
import { useState } from 'react';

export default function Footer() {
  const [showMail, setShowMail] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200">
      <div className="py-8 text-sm text-gray-600">
        <p>
          <strong className="font-semibold text-gray-900">Jon Waldstein</strong> by{' '}
          <a className="text-teal-600 hover:text-teal-700" href="https://github.com/jonwaldstein" target="_blank" rel="noreferrer">Jon Waldstein</a>.
        </p>
        <p className="mt-1">{year} Copyright, whatever.</p>
        <div className="mt-4 flex items-center gap-6">
          <a className="hover:text-gray-900" href="#" onClick={(e) => { e.preventDefault(); setShowMail(!showMail); }}>
            Email
          </a>
          <a className="hover:text-gray-900" href="http://linkedin.com/in/jon-waldstein" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-gray-900" href="https://github.com/jonwaldstein" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        {showMail && (
          <p className="mt-6 font-semibold text-gray-900">jpwaldstein@gmail.com</p>
        )}
      </div>
    </footer>
  );
}

