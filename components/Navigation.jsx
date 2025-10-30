import Link from 'next/link';
import Gravatar from './Gravatar';

export default function Navigation() {
  return (
    <nav className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur border-b border-gray-200 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-gray-900 font-semibold tracking-wide">Jon Waldstein</Link>
        <Link href="/" className="flex items-center">
          <Gravatar />
        </Link>
      </div>
    </nav>
  );
}

