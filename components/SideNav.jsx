import Link from 'next/link';
import Footer from './Footer';

export default function SideNav() {
  return (
    <aside className="hidden lg:block fixed top-20 bottom-0 overflow-y-auto pl-6 w-64">
      <div>
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">About</p>
        <ul className="space-y-1 mb-6">
          <li><Link className="text-gray-700 hover:text-gray-900 hover:underline transition-duration-300" href="/about">Me</Link></li>
        </ul>
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Portfolio</p>
        <ul className="space-y-1 mb-6">
            <li><Link className="text-gray-700 hover:text-gray-900 hover:underline transition-duration-300" href="/portfolio/plugins">Plugins</Link></li>
            <li><Link className="text-gray-700 hover:text-gray-900 hover:underline transition-duration-300" href="/portfolio/websites">Websites</Link></li>
        </ul>
      </div>
      <div className="pr-6">
        <Footer />
      </div>
    </aside>
  );
}

