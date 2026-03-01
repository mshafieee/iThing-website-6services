import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '../../../lib/navigation-helpers';
import { ArrowRight, Building, Building2, Factory, Leaf, Truck, Activity } from 'lucide-react';
import { PRODUCTS } from '../../../lib/products';

const INDUSTRY_MAP = [
  { key: 'hospitality', Icon: Building,  products: ['ihotel'],    color: '#2563EB' },
  { key: 'buildings',   Icon: Building2, products: ['ibms'],      color: '#059669' },
  { key: 'industrial',  Icon: Factory,   products: ['ifactory'],  color: '#D97706' },
  { key: 'agriculture', Icon: Leaf,      products: ['iagrix'],    color: '#16A34A' },
  { key: 'logistics',   Icon: Truck,     products: ['irtls'],     color: '#7C3AED' },
  { key: 'healthcare',  Icon: Activity,  products: ['imedical'],  color: '#DC2626' },
];

export default function IndustriesPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = useTranslations('industries');

  return (
    <div>
      <section className="bg-[#0A1628] py-20 text-center px-4">
        <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">{t('title')}</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRY_MAP.map(ind => {
              const item = t.raw(`items.${ind.key}`);
              const relatedProducts = PRODUCTS.filter(p => ind.products.includes(p.slug));
              const { Icon } = ind;
              return (
                <div key={ind.key} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
                  style={{ borderTopWidth: 3, borderTopColor: ind.color, borderTopStyle: 'solid' }}>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: ind.color + '14' }}>
                      <Icon size={22} style={{ color: ind.color }} />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-base">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {relatedProducts.map(p => (
                      <Link key={p.slug} href={`/solutions/${p.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition hover:opacity-80"
                        style={{ background: p.color + '14', color: p.color }}>
                        {p.name} <ArrowRight size={12} />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
