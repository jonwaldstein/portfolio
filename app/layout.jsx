import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation';
import SideNav from '../components/SideNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jon Waldstein',
  description: 'Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Navigation />
        <div className="pt-20">
          <SideNav />
          <main className="lg:ml-64 px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

