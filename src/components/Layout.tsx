import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-white font-bold text-xl">
              TradeWar Insight
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-300 hover:text-white">
                Dashboard
              </Link>
              <Link href="/analysis" className="text-gray-300 hover:text-white">
                Analysis
              </Link>
              <Link href="/trends" className="text-gray-300 hover:text-white">
                Trends
              </Link>
              
              {session ? (
                <button
                  onClick={() => signOut()}
                  className="btn-secondary"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => signIn('github')}
                  className="btn-primary"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">TradeWar Insight</h3>
              <p className="text-gray-400">
                Comprehensive platform for analyzing trade war impacts and trends
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/TradeWarInsight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com/TradeWarInsight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TradeWar Insight. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 