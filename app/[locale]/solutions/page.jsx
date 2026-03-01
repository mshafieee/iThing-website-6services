import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '../../../lib/navigation-helpers';
import { ArrowRight, Building, Building2, Factory, Leaf, Truck, Activity } from 'lucide-react';
import { PRODUCTS } from '../../../lib/products';
import DashboardPreview from '../../../components/ui/DashboardPreview';

const ICON_MAP = { Building, Building2, Factory, Leaf, Truck, Activity };

export async function generateMetadata() {
  return { title: 'Solutions' };
}

export default function SolutionsPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = useTranslations('solutions');
  const tp = useTranslations('products');

  return (
    <div>
      <section className="bg-[#0A1628] py-20 text-center px-4">
        <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">{t('title')}</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map(p => {
              const Icon = ICON_MAP[p.lucideIcon] || Building;
              const pt = tp.raw(p.slug);
              return (
                <div key={p.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col">
                  <div className="p-6 border-b border-gray-100" style={{ borderTopWidth: 4, borderTopColor: p.color, borderTopStyle: 'solid' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: p.color + '18' }}>
                        <Icon size={20} style={{ color: p.color }} />
                      </div>
                      <div>
                        <h2 className="text-xl font-black text-gray-900 leading-tight">{p.name}</h2>
                        <p className="text-xs font-semibold" style={{ color: p.color }}>{pt.tagline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 pt-4">
                    <DashboardPreview slug={p.slug} locale={locale} />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{pt.shortDesc}</p>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {p.stats.map((s, i) => (
                        <div key={i} className="text-center p-2.5 rounded-xl" style={{ background: p.color + '0F' }}>
                          <div className="font-black text-base" style={{ color: p.color }}>{s.value}</div>
                          <div className="text-[10px] text-gray-500 font-medium leading-tight">{pt.statLabels[i]}</div>
                        </div>
                      ))}
                    </div>
                    <Link href={`/solutions/${p.slug}`}
                      className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                      style={{ background: p.color, color: 'white' }}>
                      {t('learnMore')} <ArrowRight size={16} />
                    </Link>
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
