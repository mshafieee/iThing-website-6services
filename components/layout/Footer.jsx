import { useTranslations } from 'next-intl';
import { Link } from '../../lib/navigation-helpers';
import { PRODUCTS } from '../../lib/products';

export default function Footer() {
  const t = useTranslations('footer');
  const tc = useTranslations('nav');
  const year = new Date().getFullYear();

  const companyLinks = [
    { href: '/industries', label: tc('industries') },
    { href: '/platform', label: tc('platform') },
    { href: '/use-cases', label: tc('usecases') },
    { href: '/about', label: tc('about') },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-white font-black text-sm">i</span>
              </div>
              <span className="font-black text-xl text-white tracking-tight">iThing</span>
            </div>
            <p className="text-sm leading-relaxed">{t('tagline')}</p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('solutions')}</h4>
            <ul className="space-y-2">
              {PRODUCTS.map(p => (
                <li key={p.slug}>
                  <Link href={`/solutions/${p.slug}`}
                    className="text-sm hover:text-white transition flex items-center gap-1.5">
                    <span>
                      {p.image ? <img src={p.image} alt={p.name} className="w-4 h-4 object-cover rounded" /> : p.icon}
                    </span> {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('company')}</h4>
            <ul className="space-y-2">
              {companyLinks.map(l => (
                <li key={l.href}><Link href={l.href} className="text-sm hover:text-white transition">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:m.shafiee.osama@outlook.com" className="hover:text-white transition break-all">m.shafiee.osama@outlook.com</a></li>
              <li><a href="https://wa.me/966562077165" className="hover:text-white transition">+966 56 207 7165</a></li>
              <li className="text-gray-500">Saudi Arabia · GCC · Middle East</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
          {t('rights', { year })}
        </div>
      </div>
    </footer>
  );
}
