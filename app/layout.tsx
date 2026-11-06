import type {Metadata} from 'next';
import './globals.css'; // Global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FamFlix - منصة البث والمشاهدة المباشرة',
  description: 'منصة FamFlix للبث المباشر ومشاهدة وتحميل الأفلام والمسلسلات بجودة عالية وبدون إعلانات.',
  openGraph: {
    title: 'FamFlix - منصة البث والمشاهدة المباشرة',
    description: 'منصة FamFlix للبث المباشر ومشاهدة وتحميل الأفلام والمسلسلات بجودة عالية وبدون إعلانات.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FamFlix - منصة البث والمشاهدة المباشرة',
    description: 'منصة FamFlix للبث المباشر ومشاهدة وتحميل الأفلام والمسلسلات بجودة عالية وبدون إعلانات.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-900 text-white min-h-screen font-sans flex flex-col justify-between" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
