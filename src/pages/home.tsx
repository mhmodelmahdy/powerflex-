import React from 'react';
import { Link } from 'wouter';
import { 
  Search, 
  Key, 
  AlertTriangle, 
  ArrowLeft, 
  Layers
} from 'lucide-react';

export default function Home() {
  const pages = [
    {
      id: 'parameters',
      titleAr: 'البحث عن بارامتر',
      titleEn: 'Parameters Browser',
      description: 'البحث السريع برقم البارامتر أو اسمه بالعربي والإنجليزي مع عرض القيم الافتراضية والنطاقات.',
      href: '/parameters',
      icon: Search,
      badge: 'مستكشف الشامل',
      color: 'text-sky-400',
      borderColor: 'hover:border-sky-500/50 focus-within:border-sky-500/50',
      bgColor: 'bg-sky-500/10',
      btnBg: 'bg-sky-500/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-white',
    },
    {
      id: 'groups',
      titleAr: 'مجموعات البارامترات',
      titleEn: 'Parameter Groups',
      description: 'تصفح البارامترات مقسمة حسب التصنيف الوظيفي (المحرك، التحكم، الإدخال/الإخراج، والأعطال).',
      href: '/groups',
      icon: Layers,
      badge: 'تصنيف وظيفي',
      color: 'text-indigo-400',
      borderColor: 'hover:border-indigo-500/50 focus-within:border-indigo-500/50',
      bgColor: 'bg-indigo-500/10',
      btnBg: 'bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white',
    },
    {
      id: 'him-guide',
      titleAr: 'دليل استخدام لوحة HIM',
      titleEn: 'HIM Display Guide',
      description: 'شرح تفاعلي لوظائف الأزرار ومفاتيح التنقل في لوحة التحكم والشاشة ومؤشرات الحالة.',
      href: '/him-guide',
      icon: Key,
      badge: 'شرح تفاعلي',
      color: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/50 focus-within:border-emerald-500/50',
      bgColor: 'bg-emerald-500/10',
      btnBg: 'bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white',
    },
    {
      id: 'quick-ref',
      titleAr: 'المرجع السريع والأعطال',
      titleEn: 'Quick Reference & Fault Codes',
      description: 'أهم 30 بارامتر للتشغيل الأساسي ودليل شامل لأكواد الأعطال الشائعة مع أسبابها وطرق معالجتها.',
      href: '/quick-ref',
      icon: AlertTriangle,
      badge: 'المرجع والأعطال',
      color: 'text-amber-400',
      borderColor: 'hover:border-amber-500/50 focus-within:border-amber-500/50',
      bgColor: 'bg-amber-500/10',
      btnBg: 'bg-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-white',
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out max-w-4xl mx-auto py-2">
      
      {/* Minimal Header */}
      <div className="text-center md:text-right pb-2 border-b border-border/50">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
          PowerFlex 753 Guide System
        </h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-1">
          اختر من القائمة التالية للانتقال مباشرة إلى القسم المطلوب
        </p>
      </div>

      {/* Touch-Friendly Mobile & Desktop Button Navigation Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pages.map((page) => {
          const Icon = page.icon;
          return (
            <Link key={page.id} href={page.href}>
              <div 
                className={`group relative bg-card border border-border rounded-xl p-5 md:p-6 transition-all duration-200 ${page.borderColor} active:scale-[0.98] cursor-pointer flex flex-col justify-between h-full shadow-sm hover:shadow-md touch-manipulation`}
              >
                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-xl ${page.bgColor} ${page.color} transition-transform group-hover:scale-105 duration-200`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
                      {page.badge}
                    </span>
                  </div>

                  {/* Title & English Subtitle */}
                  <h2 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {page.titleAr}
                  </h2>
                  <div className="text-xs font-mono text-muted-foreground mb-2 opacity-70">
                    {page.titleEn}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {page.description}
                  </p>
                </div>

                {/* Direct Action Button */}
                <div className="pt-3 border-t border-border/40 flex items-center justify-between mt-auto">
                  <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground">
                    فتح الصفحة
                  </span>
                  
                  <div className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${page.btnBg}`}>
                    <span>انتقل الآن</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
}