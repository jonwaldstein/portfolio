import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';

export const metadata = {
  title: 'Jon Waldstein',
  description: 'Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 max-w-6xl mx-auto p-12">
        <Navigation />
        <SideNav />
        <main className="pt-20">
            <div className="w-full lg:ml-64 min-h-screen">
                {children}
            </div>
        </main>
      </body>
    </html>
  );
}

