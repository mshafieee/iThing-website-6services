import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function AboutPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = useTranslations('about');

  return (
    <div>
      <section className="bg-[#0A1628] py-20 text-center px-4">
        <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">{t('title')}</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-xl font-black text-gray-900 mb-4">{t('mission')}</h2>
            <p className="text-gray-600 leading-relaxed">{t('missionText')}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-xl font-black text-gray-900 mb-4">{t('vision')}</h2>
            <p className="text-gray-600 leading-relaxed">{t('visionText')}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-50 py-16" id="contact">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-2">{t('ctaTitle')}</h2>
          <p className="text-gray-500 mb-10">{t('contact')}</p>
          <div className="space-y-4">
            <a href={`mailto:${t('email')}`}
              className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition group text-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Email</div>
                <div className="font-semibold text-gray-900">{t('email')}</div>
              </div>
              <ArrowRight size={16} className="ms-auto text-gray-300 group-hover:text-blue-500 transition" />
            </a>
            <a href="https://wa.me/966562077165" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-md transition group text-start">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-green-600" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">WhatsApp</div>
                <div className="font-semibold text-gray-900">{t('phone')}</div>
              </div>
              <ArrowRight size={16} className="ms-auto text-gray-300 group-hover:text-green-500 transition" />
            </a>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 text-start">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-gray-500" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Location</div>
                <div className="font-semibold text-gray-900">{t('location')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
