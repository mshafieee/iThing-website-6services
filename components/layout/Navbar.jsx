'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '../../lib/navigation-helpers';
import { Menu, X, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../../lib/products';

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const switchLocale = (locale) => router.replace(pathname, { locale });

  const links = [
    { href: '/', label: t('home') },
    { href: '/industries', label: t('industries') },
    { href: '/platform', label: t('platform') },
    { href: '/use-cases', label: t('usecases') },
    { href: '/about', label: t('about') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <span className="text-white font-black text-sm">i</span>
            </div>
            <span className="font-black text-xl text-gray-900 tracking-tight">iThing</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition">
              {t('home')}
            </Link>

            {/* Solutions dropdown */}
            <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition">
                {t('solutions')} <ChevronDown size={14} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full start-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 grid grid-cols-2 gap-1">
                  {PRODUCTS.map(p => (
                    <Link key={p.slug} href={`/solutions/${p.slug}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition group">
                      <span className="text-lg">
                        {p.image ? <img src={p.image} alt={p.name} className="w-5 h-5 object-cover rounded" /> : p.icon}
                      </span>
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">{p.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {links.slice(1).map(l => (
              <Link key={l.href} href={l.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Locale toggle */}
            <div className="flex items-center bg-gray-100 rounded-lg p-0.5">
              {['en', 'ar'].map(loc => (
                <button key={loc} onClick={() => switchLocale(loc)}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition ${pathname.startsWith(`/${loc}`) || (loc === 'en' && !pathname.startsWith('/ar')) ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>
            <Link href="/about#contact"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition shadow-sm shadow-blue-200">
              {t('cta')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          <Link href="/" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">{t('home')}</Link>
          <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">{t('solutions')}</div>
          {PRODUCTS.map(p => (
            <Link key={p.slug} href={`/solutions/${p.slug}`} onClick={() => setOpen(false)}
              className="flex items-center gap-2 ps-6 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <span>
                {p.image ? <img src={p.image} alt={p.name} className="w-5 h-5 object-cover rounded" /> : p.icon}
              </span> {p.name}
            </Link>
          ))}
          {links.slice(1).map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">{l.label}</Link>
          ))}
          <div className="flex gap-2 pt-2">
            {['en', 'ar'].map(loc => (
              <button key={loc} onClick={() => { switchLocale(loc); setOpen(false); }}
                className="px-4 py-2 text-xs font-bold border rounded-lg text-gray-600 hover:bg-gray-50">{loc.toUpperCase()}</button>
            ))}
            <Link href="/about#contact" onClick={() => setOpen(false)}
              className="flex-1 text-center py-2 bg-blue-600 text-white text-sm font-semibold rounded-xl">
              {t('cta')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
