import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '../../../../lib/navigation-helpers';
import { notFound } from 'next/navigation';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { PRODUCTS, getProduct } from '../../../../lib/products';

export async function generateStaticParams() {
  const locales = ['en', 'ar'];
  return locales.flatMap(locale => PRODUCTS.map(p => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params: { slug } }) {
  const p = getProduct(slug);
  if (!p) return {};
  return { title: `${p.name} — ${p.tagline}` };
}

export default function ProductPage({ params: { locale, slug } }) {
  setRequestLocale(locale);
  const product = getProduct(slug);
  if (!product) notFound();
  const p = product;
  const t = useTranslations('solutions');
  const tc = useTranslations('common');

  const otherProducts = PRODUCTS.filter(x => x.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${p.bgFrom} ${p.bgTo} pt-16 pb-24 px-4 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-5xl mx-auto relative">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition">
            <ArrowLeft size={16} /> {t('title')}
          </Link>
          <div className="text-6xl mb-4">{p.icon}</div>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-3">{p.name}</h1>
          <p className="text-white/80 text-xl lg:text-2xl font-semibold mb-6">{p.tagline}</p>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">{p.description}</p>
          <div className="flex flex-wrap gap-3 mt-10">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold rounded-xl transition hover:bg-gray-100">
              {t('cta')} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-8">{t('stats')}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {p.stats.map(s => (
              <div key={s.label} className="text-center p-6 rounded-2xl border border-gray-100">
                <div className="text-3xl font-black mb-1" style={{ color: p.color }}>{s.value}</div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-8">{t('features')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {p.features.map(f => (
              <div key={f} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: p.color }} />
                <span className="text-sm text-gray-700 font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases + Industries */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-black text-gray-900 mb-6">{t('useCases')}</h2>
            <ul className="space-y-3">
              {p.useCases.map(uc => (
                <li key={uc} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.color }} />
                  {uc}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-black text-gray-900 mb-6">{t('industries')}</h2>
            <div className="flex flex-wrap gap-2">
              {p.industries.map(i => (
                <span key={i} className="px-3 py-1.5 rounded-lg text-sm font-semibold border"
                  style={{ background: p.color + '14', color: p.color, borderColor: p.color + '33' }}>
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 py-16 text-center px-4" id="contact">
        <h2 className="text-3xl font-black text-white mb-4">{t('cta')}</h2>
        <p className="text-gray-400 mb-8">{t('ctaDesc', { name: p.name })}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`mailto:m.shafiee.osama@outlook.com?subject=Demo Request — ${p.name}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition"
            style={{ background: p.color }}>
            {tc('scheduleDemo')} <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Other products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-black text-gray-900 mb-8">Explore Other Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherProducts.map(op => (
              <Link key={op.slug} href={`/solutions/${op.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition group">
                <span className="text-3xl">{op.icon}</span>
                <div>
                  <div className="font-black text-gray-900">{op.name}</div>
                  <div className="text-xs text-gray-500 font-medium">{op.tagline}</div>
                </div>
                <ArrowRight size={16} className="ms-auto text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
