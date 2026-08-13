import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lion Ride Gh | Electric Bicycles & Tricycles',
  description: 'Lion Ride Gh builds electric bicycles and tricycles in Tema, Accra, Ghana.',
};

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/order', label: 'Order' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-fog text-slate-900">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 lg:px-10">
          <header className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Lion Ride Gh</p>
              <p className="text-xs text-slate-500">Tema, Accra — Electric mobility pioneers</p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-brand-cyan transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-12 border-t border-slate-200 py-6 text-sm text-slate-600">
            <p>202 Apple Ave., Community 10, Tema, Accra, Ghana</p>
            <p className="mt-1">Phone: +233 20 703 2222 · Email: lionridegh@gmail.com</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
