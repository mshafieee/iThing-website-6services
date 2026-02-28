import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { PRODUCTS } from '../../../lib/products';

export default function UseCasesPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = useTranslations('usecases');
  const items = t.raw('items');

  return (
    <div>
      <section className="bg-[#0A1628] py-20 text-center px-4">
        <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">{t('title')}</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          {items.map((item, i) => {
            const product = PRODUCTS.find(p => p.name === item.product);
            return (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="text-3xl shrink-0">{product?.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-lg" style={{ background: product?.color + '14', color: product?.color }}>
                        {item.product}
                      </span>
                    </div>
                    <h3 className="font-black text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold"
                      style={{ background: product?.color + '14', color: product?.color }}>
                      ✓ {item.result}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
