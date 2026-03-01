import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '../../lib/navigation-helpers';
import { ArrowRight, Wifi, BarChart3, Shield, Zap, ChevronRight, Building, Building2, Factory, Leaf, Truck, Activity } from 'lucide-react';
import { PRODUCTS } from '../../lib/products';

export async function generateMetadata() {
  return { title: 'iThing — IoT Solutions for Every Industry' };
}

const STATS = [
  { value: '10+', labelKey: 'stat1' },
  { value: '30–50%', labelKey: 'stat2' },
  { value: '20–40%', labelKey: 'stat3' },
  { value: '40%', labelKey: 'stat4' },
];

const TECH = [
  { icon: Wifi, titleKey: 'tech1Title', descKey: 'tech1Desc' },
  { icon: BarChart3, titleKey: 'tech2Title', descKey: 'tech2Desc' },
  { icon: Shield, titleKey: 'tech3Title', descKey: 'tech3Desc' },
  { icon: Zap, titleKey: 'tech4Title', descKey: 'tech4Desc' },
];

const ICON_MAP = { Building, Building2, Factory, Leaf, Truck, Activity };

export default function HomePage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = useTranslations('home');
  const tp = useTranslations('products');
  const tPlatform = useTranslations('platform');

  const techItems = [
    { icon: Wifi,     title: tPlatform.raw('features.connectivity').title, desc: tPlatform.raw('features.connectivity').desc },
    { icon: BarChart3,title: tPlatform.raw('features.analytics').title,    desc: tPlatform.raw('features.analytics').desc },
    { icon: Shield,   title: tPlatform.raw('features.security').title,     desc: tPlatform.raw('features.security').desc },
    { icon: Zap,      title: tPlatform.raw('features.edge').title,         desc: tPlatform.raw('features.edge').desc },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-20 start-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 end-1/4 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            {t('heroBadge')}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6 max-w-5xl mx-auto">
            {t('heroTitle').split(' ').slice(0, -2).join(' ')}{' '}
            <span className="gradient-text">{t('heroTitle').split(' ').slice(-2).join(' ')}</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-lg shadow-blue-900/50">
              {t('heroCta1')} <ArrowRight size={18} />
            </Link>
            <Link href="/about#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-2xl border border-white/20 transition backdrop-blur">
              {t('heroCta2')}
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-16">
            {PRODUCTS.map(p => {
              const Icon = ICON_MAP[p.slug === 'ihotel' ? 'Building' : p.slug === 'ibms' ? 'Building2' : p.slug === 'ifactory' ? 'Factory' : p.slug === 'iagrix' ? 'Leaf' : p.slug === 'irtls' ? 'Truck' : 'Activity'];
              return (
                <Link key={p.slug} href={`/solutions/${p.slug}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm text-gray-300 font-medium">
                  <Icon size={14} style={{ color: p.color }} />
                  {p.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">{t('statsTitle')}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '10+',    label: locale === 'ar' ? 'قطاع صناعي' : 'Industry Sectors' },
              { value: '30–50%', label: locale === 'ar' ? 'تخفيض التوقف' : 'Downtime Reduction' },
              { value: '20–40%', label: locale === 'ar' ? 'توفير الصيانة' : 'Maintenance Savings' },
              { value: '40%',    label: locale === 'ar' ? 'توفير تكاليف الطاقة' : 'Energy Cost Reduction' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-gray-900 mb-1">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">{t('productsTitle')}</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">{t('productsSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map(p => {
              const Icon = ICON_MAP[p.lucideIcon] || Building;
              const pt = tp.raw(p.slug);
              return (
                <Link key={p.slug} href={`/solutions/${p.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-gray-200 border-t-4"
                  style={{ borderTopColor: p.color }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: p.color + '14' }}>
                      <Icon size={24} style={{ color: p.color }} />
                    </div>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-1">{p.name}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: p.color }}>{pt.tagline}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{pt.shortDesc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stats.slice(0, 2).map((s, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold"
                        style={{ background: p.color + '14', color: p.color }}>
                        {s.value} {pt.statLabels[i]}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH HIGHLIGHTS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">{t('techTitle')}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{t('techSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techItems.map(item => (
              <div key={item.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-24">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">{t('ctaTitle')}</h2>
          <p className="text-gray-400 text-lg mb-10">{t('ctaSubtitle')}</p>
          <Link href="/about#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-900/50 transition">
            {t('ctaButton')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
