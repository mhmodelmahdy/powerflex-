import React, { useState } from 'react';
import { AlertTriangle, Info, BookOpen, Wrench, ShieldAlert, Hash } from 'lucide-react';
import { parameters, faults, quickReferenceIds } from '@/data/parameters';

export default function QuickReference() {
  const [activeTab, setActiveTab] = useState<'params' | 'faults'>('params');

  const topParams = parameters.filter(p => quickReferenceIds.includes(p.id)).sort((a, b) => a.id - b.id);

  return (
    <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out pb-10">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 flex items-center gap-2 sm:gap-3">
          <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-primary shrink-0" />
          <span>المرجع السريع والأعطال</span>
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground">أهم البارامترات للتشغيل ودليل الأخطاء الشائعة وحلولها</p>
      </div>

      {/* Responsive Tabs Switcher */}
      <div className="flex gap-2 p-1 bg-card border border-border rounded-xl w-full sm:w-fit">
        <button
          onClick={() => setActiveTab('params')}
          className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold transition-all touch-manipulation ${
            activeTab === 'params' 
              ? 'bg-primary text-primary-foreground shadow-md' 
              : 'text-muted-foreground hover:bg-background'
          }`}
        >
          <SettingsIcon className="w-4 h-4" />
          <span>أهم 30 بارامتر</span>
        </button>
        <button
          onClick={() => setActiveTab('faults')}
          className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold transition-all touch-manipulation ${
            activeTab === 'faults' 
              ? 'bg-destructive text-destructive-foreground shadow-md' 
              : 'text-muted-foreground hover:bg-background'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>الأعطال الشائعة</span>
        </button>
      </div>

      {/* Params Tab */}
      {activeTab === 'params' && (
        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/20 p-3.5 sm:p-4 rounded-xl flex items-start gap-3 text-primary">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed">
              هذه القائمة تحتوي على أهم البارامترات التي تحتاجها في 90% من تطبيقات PowerFlex 753. تأكد من إدخال بيانات الموتور (P27 إلى P31) بشكل صحيح قبل التشغيل.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right">
                <thead className="text-xs uppercase bg-background text-muted-foreground border-b border-border font-bold font-mono">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">الاسم بالعربي</th>
                    <th className="px-4 py-3">English Name</th>
                    <th className="px-4 py-3">النطاق / Range</th>
                    <th className="px-4 py-3 text-center">النوع</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {topParams.map(param => (
                    <tr key={param.id} className="hover:bg-background/50 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-primary">P{param.id.toString().padStart(3, '0')}</td>
                      <td className="px-4 py-3 font-bold text-foreground">{param.nameAr}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{param.nameEn}</td>
                      <td className="px-4 py-3 font-mono text-xs">{param.range} {param.unit !== '—' && param.unit}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-[10px] px-2 py-1 rounded font-bold ${param.rw === 'R' ? 'bg-secondary text-muted-foreground' : 'bg-primary/10 text-primary'}`}>
                          {param.rw}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-3">
            {topParams.map(param => (
              <div key={param.id} className="bg-card border border-border rounded-xl p-3.5 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 bg-background border border-border px-2 py-0.5 rounded font-mono font-bold text-xs text-primary">
                    <Hash className="w-3 h-3" />
                    <span>P{param.id.toString().padStart(3, '0')}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${param.rw === 'R' ? 'bg-secondary text-muted-foreground' : 'bg-primary/10 text-primary'}`}>
                    {param.rw}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">{param.nameAr}</div>
                  <div className="text-xs font-mono text-muted-foreground">{param.nameEn}</div>
                </div>
                <div className="text-xs font-mono bg-background border border-border px-2.5 py-1 rounded flex justify-between">
                  <span className="text-muted-foreground text-[10px]">Range:</span>
                  <span>{param.range} {param.unit !== '—' && param.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Faults Tab */}
      {activeTab === 'faults' && (
        <div className="space-y-4">
          <div className="bg-destructive/10 border border-destructive/20 p-3.5 sm:p-4 rounded-xl flex items-start gap-3 text-destructive">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed">
              عند حدوث عطل (Fault)، يتوقف الدرايف عن العمل ويضيء مؤشر العطل. استخدم P420 لمسح الخطأ أو اضغط على زر التوقف الأحمر بعد حل المشكلة الجذرية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {faults.map(fault => (
              <div key={fault.code} className="bg-card border border-border rounded-xl p-4 sm:p-5 hover:border-destructive/50 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-1.5 h-full bg-destructive/80 group-hover:bg-destructive transition-colors" />
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-destructive/20 text-destructive font-mono font-bold px-2.5 py-1 rounded text-xs sm:text-sm border border-destructive/30 shrink-0">
                    {fault.code}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-sm sm:text-base text-foreground leading-snug">{fault.nameAr}</h3>
                    <div className="text-xs font-mono text-muted-foreground truncate">{fault.nameEn}</div>
                  </div>
                </div>

                <div className="space-y-2.5 sm:space-y-3 mt-3 border-t border-border pt-3">
                  <div>
                    <div className="text-[11px] text-muted-foreground uppercase mb-0.5 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-amber-400" /> 
                      <span>السبب المحتمل</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed">{fault.cause}</p>
                  </div>
                  <div>
                    <div className="text-[11px] text-success uppercase mb-0.5 flex items-center gap-1">
                      <Wrench className="w-3 h-3" /> 
                      <span>الحل المقترح</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground leading-relaxed">{fault.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}