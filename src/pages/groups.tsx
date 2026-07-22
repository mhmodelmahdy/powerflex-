import React from 'react';
import { Server, Activity, Zap, FastForward, Sliders, ShieldAlert, Cpu } from 'lucide-react';
import { parameterGroups } from '@/data/parameters';
import { Link } from 'wouter';

export default function ParameterGroups() {
  const icons: Record<string, any> = {
    monitoring: Activity,
    motor: Zap,
    speed: FastForward,
    control: Sliders,
    protection: ShieldAlert,
    diagnostics: Cpu
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
          <Server className="w-8 h-8 text-primary" />
          مجموعات البارامترات
        </h1>
        <p className="text-muted-foreground">التصنيف الوظيفي للبارامترات لتسهيل الوصول إليها</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {parameterGroups.map((group) => {
          const Icon = icons[group.id] || Server;
          
          return (
            <Link key={group.id} href="/parameters">
              <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-all cursor-pointer group hover:shadow-[0_0_20px_rgba(0,212,255,0.05)] relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-3xl transition-transform group-hover:scale-150 ${group.color.split(' ')[0]}`} />
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl border ${group.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="bg-background border border-border px-3 py-1 rounded-full text-xs font-mono font-bold text-muted-foreground">
                    P{group.start} - P{group.end}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{group.nameAr}</h2>
                  <h3 className="text-sm font-mono text-muted-foreground">{group.nameEn}</h3>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex justify-end">
                  <span className="text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    تصفح البارامترات <ChevronLeft className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function ChevronLeft(props: any) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}