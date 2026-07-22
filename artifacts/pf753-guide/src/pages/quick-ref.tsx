import React, { useState } from 'react';
import { AlertTriangle, Info, BookOpen, Wrench, ShieldAlert } from 'lucide-react';
import { parameters, faults, quickReferenceIds } from '@/data/parameters';
import { Link } from 'wouter';

export default function QuickReference() {
  const [activeTab, setActiveTab] = useState<'params' | 'faults'>('params');

  const topParams = parameters.filter(p => quickReferenceIds.includes(p.id)).sort((a, b) => a.id - b.id);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out pb-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          المرجع السريع والأعطال
        </h1>
        <p className="text-muted-foreground">أهم البارامترات للتشغيل ودليل الأخطاء الشائعة وحلولها</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-card border border-border rounded-xl w-full md:w-fit">
        <button
          onClick={() => setActiveTab('params')}
          className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all ${
            activeTab === 'params' 
              ? 'bg-primary text-primary-foreground shadow-md' 
              : 'text-muted-foreground hover:bg-background'
          }`}
        >
          <Settings className="w-4 h-4" />
          أهم 30 بارامتر
        </button>
        <button
          onClick={() => setActiveTab('faults')}
          className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all ${
            activeTab === 'faults' 
              ? 'bg-destructive text-destructive-foreground shadow-md' 
              : 'text-muted-foreground hover:bg-background'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          الأعطال الشائعة
        </button>
      </div>

      {activeTab === 'params' && (
        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl flex items-start gap-3 text-primary">
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed">
              هذه القائمة تحتوي على أهم البارامترات التي تحتاجها في 90% من تطبيقات PowerFlex 753. تأكد من إدخال بيانات الموتور (P27 إلى P31) بشكل صحيح قبل التشغيل.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl overflow-hidden">
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
        </div>
      )}

      {activeTab === 'faults' && (
        <div className="space-y-4">
          <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-xl flex items-start gap-3 text-destructive">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed">
              عند حدوث عطل (Fault)، يتوقف الدرايف عن العمل ويضيء مؤشر العطل. استخدم P420 لمسح الخطأ أو اضغط على زر التوقف الأحمر بعد حل المشكلة الجذرية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faults.map(fault => (
              <div key={fault.code} className="bg-card border border-border rounded-xl p-5 hover:border-destructive/50 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-full bg-destructive/80 group-hover:bg-destructive transition-colors" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-destructive/20 text-destructive font-mono font-bold px-3 py-1 rounded border border-destructive/30">
                    {fault.code}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{fault.nameAr}</h3>
                    <div className="text-xs font-mono text-muted-foreground">{fault.nameEn}</div>
                  </div>
                </div>

                <div className="space-y-3 mt-4 border-t border-border pt-4">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase mb-1 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> السبب المحتمل</div>
                    <p className="text-sm font-medium">{fault.cause}</p>
                  </div>
                  <div>
                    <div className="text-xs text-success uppercase mb-1 flex items-center gap-1"><Wrench className="w-3 h-3" /> الحل المقترح</div>
                    <p className="text-sm font-medium text-muted-foreground">{fault.solution}</p>
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

function Settings(props: any) {
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
  )
}