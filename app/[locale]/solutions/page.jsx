import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '../../../lib/navigation-helpers';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../../lib/products';

export async function generateMetadata() {
  return { title: 'Solutions' };
}

export default function SolutionsPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = useTranslations('solutions');

  return (
    <div>
      <section className="bg-[#0A1628] py-20 text-center px-4">
        <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">{t('title')}</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map(p => (
              <div key={p.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                {/* Color header */}
                <div className={`bg-gradient-to-r ${p.bgFrom} ${p.bgTo} p-8`}>
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded" />
                  ) : (
                    <span className="text-5xl">{p.icon}</span>
                  )}
                  <h2 className="text-2xl font-black text-white mt-3">{p.name}</h2>
                  <p className="text-white/80 text-sm mt-1">{p.tagline}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.shortDesc}</p>
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {p.stats.map(s => (
                      <div key={s.label} className="text-center p-3 rounded-xl" style={{ background: p.color + '0F' }}>
                        <div className="font-black text-lg" style={{ color: p.color }}>{s.value}</div>
                        <div className="text-[10px] text-gray-500 font-medium leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link href={`/solutions/${p.slug}`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition"
                    style={{ background: p.color, color: 'white' }}>
                    {t('learnMore')} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
