import Link from 'next/link';
import Footer from './Footer';

export default function SideNav() {
  return (
    <aside className="hidden lg:block fixed top-20 left-0 w-64 h-[calc(100vh-5rem)] overflow-y-auto px-6 py-8">
      <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">About</p>
      <ul className="space-y-1 mb-6">
        <li><Link className="text-gray-700 hover:text-gray-900 hover:underline transition-duration-300" href="/about">Me</Link></li>
      </ul>
      <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Portfolio</p>
      <ul className="space-y-1 mb-6">
        <li><Link className="text-gray-700 hover:text-gray-900 hover:underline transition-duration-300" href="/portfolio/plugins">Plugins</Link></li>
        <li><Link className="text-gray-700 hover:text-gray-900 hover:underline transition-duration-300" href="/portfolio/websites">Websites</Link></li>
      </ul>
      <Footer />
    </aside>
  );
}

