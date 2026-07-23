import React from 'react';
import { Server, Activity, Zap, FastForward, Sliders, ShieldAlert, Cpu, ArrowLeft, Gauge, Share2, Settings } from 'lucide-react';
import { parameterGroups } from '@/data/parameters';
import { Link } from 'wouter';

export default function ParameterGroups() {
  const icons: Record<string, any> = {
    monitor: Activity,
    motor_control: Zap,
    feedback_io: Sliders,
    drive_cfg: Settings,
    protection: ShieldAlert,
    speed_control: FastForward,
    torque_control: Gauge,
    communication: Share2,
    diagnostics: Cpu
  };

  return (
    <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 flex items-center gap-2 sm:gap-3">
          <Server className="w-6 h-6 sm:w-8 sm:h-8 text-primary shrink-0" />
          <span>ملفات ومجموعات البارامترات (File / Group)</span>
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground">التصنيف الهيكلي والوظيفي المطابق لكتالوج PowerFlex</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {parameterGroups.map((group) => {
          const Icon = icons[group.id] || Server;
          
          return (
            <Link key={group.id} href={`/parameters?group=${group.id}`}>
              <div className="bg-card border border-border p-4 sm:p-6 rounded-xl hover:border-primary/50 transition-all cursor-pointer group active:scale-[0.98] relative overflow-hidden flex flex-col justify-between h-full touch-manipulation">
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-3xl transition-transform group-hover:scale-150 ${group.color.split(' ')[0]}`} />
                
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className={`p-2.5 sm:p-3 rounded-xl border ${group.color}`}>
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="bg-background border border-border px-2.5 py-1 rounded-full text-xs font-mono font-bold text-muted-foreground">
                      P{group.start} - P{group.end}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold mb-0.5 group-hover:text-primary transition-colors">{group.nameAr}</h2>
                    <h3 className="text-xs sm:text-sm font-mono text-muted-foreground">{group.nameEn} (File)</h3>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">File: {group.nameEn}</span>
                  <span className="text-primary text-xs sm:text-sm font-bold flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
                    <span>تصفح البارامترات</span>
                    <ArrowLeft className="w-4 h-4" />
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