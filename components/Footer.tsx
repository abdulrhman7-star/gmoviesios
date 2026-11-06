"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Play, Film, Tv, Shield, Zap, Heart } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  // Do not render footer on embed player page
  if (pathname?.startsWith('/embed')) {
    return null;
  }

  return (
    <footer className="w-full bg-gray-950 border-t border-gray-800 text-gray-400 font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 text-white group select-none">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Play className="w-4 h-4 fill-white text-white ml-0.5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Fam<span className="text-blue-500">Flix</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              منصة سريعة لمشاهدة وتحميل الأفلام والمسلسلات بجودة عالية وسيرفرات مباشرة بدون إعلانات مزعجة وبأقل استهلاك للبيانات.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>خوادم البث المباشر نشطة ومحدثة</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">أقسام المنصة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5 text-blue-500" />
                  <span>الصفحة الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link href="/?tab=movies" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5 text-blue-500" />
                  <span>أحدث الأفلام</span>
                </Link>
              </li>
              <li>
                <Link href="/?tab=series" className="hover:text-purple-400 transition-colors inline-flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5 text-purple-500" />
                  <span>المسلسلات التلفزيونية</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">مميزات البث المباشر</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>بث فوري مباشر (Zero Latency)</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>حماية الروابط وتخطي قيود CORS</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold text-xs shrink-0">1080p</span>
                <span>دعم دقات متعددة تناسب سرعتك</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-xs shrink-0">Embed</span>
                <span>كود تضمين متجاوب للمواقع والمدونات</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Disclaimer & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">إخلاء مسؤولية</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              جميع ملفات الفيديو والروابط المعروضة في هذا الموقع يتم فهرستها وجلبها تلقائياً من خوادم خارجية عامة على شبكة الإنترنت. لا يقوم الموقع باستضافة أو تخزين أي مواد خاضعة لحقوق الطبع والنشر على خوادمه الخاصة.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} FamFlix. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-1">
            <span>صُنع بأعلى معايير الأداء والسرعة</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline mx-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
