import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Wifi, BarChart3, Zap, Database, Smartphone, Lock, Cpu } from 'lucide-react';

const ICONS = { connectivity: Wifi, analytics: BarChart3, realtime: Zap, integration: Database, scale: BarChart3, mobile: Smartphone, security: Lock, edge: Cpu };
const FEATURE_KEYS = ['connectivity', 'analytics', 'realtime', 'integration', 'scale', 'mobile', 'security', 'edge'];

export default function PlatformPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = useTranslations('platform');

  return (
    <div>
      <section className="bg-[#0A1628] py-20 text-center px-4">
        <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">{t('title')}</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURE_KEYS.map(key => {
              const Icon = ICONS[key];
              const feature = t.raw(`features.${key}`);
              return (
                <div key={key} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture diagram (text-based) */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-8">{t('architectureTitle')}</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-sm">
            {t.raw('layers').map((layer, i) => (
              <div key={layer} className="flex items-center gap-4">
                <div className="px-6 py-4 bg-gray-50 rounded-2xl border border-gray-200 font-semibold text-gray-700">
                  {layer}
                </div>
                {i < 3 && <div className="text-2xl text-gray-300 hidden lg:block">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
