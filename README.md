# PowerFlex 753 — دليل البارامترات

دليل تفاعلي (Web App) لِمُحوّل التردد **Allen-Bradley PowerFlex 753** — بالعربي بواجهة RTL.
بيوفّر بحث في البارامترات، محاكي للشاشة (HIM)، مجموعات البارامترات، ومرجع سريع للأعطال.

التطبيق Frontend فقط (Static SPA) — كل البيانات ثابتة جوه الكود، **من غير Backend ولا قاعدة بيانات**، فبيترفع مباشرة على أي استضافة ثابتة.

## التقنيات

- **React 19** + **Vite 7** + **TypeScript**
- **Tailwind CSS 4**
- **wouter** (SPA routing)
- **TanStack Query** + **Radix UI / shadcn** (مكونات الواجهة)

## التشغيل محلياً

> المتطلبات: **Node.js 20+**

```bash
npm install      # تثبيت الحزم
npm run dev      # تشغيل خادم التطوير على http://localhost:5000
npm run build    # بناء نسخة الإنتاج إلى مجلد dist/
npm run preview  # معاينة نسخة الإنتاج محلياً
```

## الرفع على Vercel

المشروع جاهز للرفع المباشر من GitHub:

1. ارفع المشروع لِمستودع GitHub.
2. على [Vercel](https://vercel.com): **Add New → Project** واختر المستودع.
3. Vercel هيكتشف Vite تلقائياً، وملف `vercel.json` مُعدّ مسبقاً بـ:
   - أمر البناء: `npm run build`
   - مجلد الخرج: `dist`
   - إعادة توجيه كل المسارات لـ `index.html` (دعم SPA routing)

إضغط **Deploy** — خلاص. ✅

> نفس الخطوات تصلح لِـ Netlify و Cloudflare Pages مع نفس الإعدادات.

## هيكل المشروع

```
.
├── public/                # ملفات ثابتة (favicon, robots)
├── src/
│   ├── components/         # مكونات الواجهة (layout + shadcn/ui)
│   ├── data/               # بيانات البارامترات (parameters.ts)
│   ├── hooks/              # React hooks
│   ├── lib/                # أدوات مساعدة
│   ├── pages/              # صفحات التطبيق
│   ├── App.tsx             # المكوّن الرئيسي + الراوتر
│   ├── main.tsx            # نقطة الدخول
│   └── index.css           # أنماط Tailwind + المتغيرات
├── index.html
├── vite.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

## الترخيص

MIT
