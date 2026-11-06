import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Moviey - Akwam Streamer',
  description: 'نظام بث ومproxy متكامل لموقع أكوام مع تخطي حماية الروابط وتوافق الميديا.',
  openGraph: {
    title: 'Moviey - Akwam Streamer',
    description: 'نظام بث ومproxy متكامل لموقع أكوام مع تخطي حماية الروابط وتوافق الميديا.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moviey - Akwam Streamer',
    description: 'نظام بث ومproxy متكامل لموقع أكوام مع تخطي حماية الروابط وتوافق الميديا.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-900 text-white min-h-screen font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
