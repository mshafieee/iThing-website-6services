import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import '../../app/globals.css';

const locales = ['en', 'ar'];

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata() {
  return {
    title: { template: '%s | iThing', default: 'iThing — IoT Solutions' },
    description: 'Purpose-built IoT platforms for hospitality, buildings, industrial, agriculture, logistics, and healthcare.',
  };
}

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const isRTL = locale === 'ar';
  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={`bg-white text-gray-900 ${isRTL ? 'font-[Noto_Sans_Arabic]' : 'font-[Inter]'}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
