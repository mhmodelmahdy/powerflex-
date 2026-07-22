import React, { useState, useEffect } from 'react';
import { Activity, Zap, Thermometer, Cpu, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Folder } from 'lucide-react';

export default function Home() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card border border-border p-6 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Allen-Bradley PowerFlex 753</h1>
          <p className="text-muted-foreground font-mono text-sm">Cat: 20F1ANC072JA0NNNNN | 400V, 72A, 37kW</p>
        </div>
        
        <div className="flex gap-3">
          <div className="bg-success/10 border border-success/30 text-success px-4 py-2 rounded-lg flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-bold text-sm tracking-wide">AUTO</span>
          </div>
          <div className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-lg flex items-center gap-2">
            <Activity className="w-4 h-4" />
            <span className="font-bold text-sm tracking-wide">RUNNING</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* HIM Simulator */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="text-lg font-bold flex items-center gap-2 mb-2">
            <TerminalSquareIcon className="w-5 h-5 text-primary" />
            <span>محاكي الشاشة (HIM)</span>
          </div>
          
          <div className="bg-[#2a2a2a] p-4 rounded-xl border-2 border-[#1a1a1a] shadow-2xl flex flex-col items-center">
            {/* Screen */}
            <div className="lcd-screen w-full aspect-[4/3] rounded-md p-3 flex flex-col justify-between mb-6">
              <div className="flex justify-between items-center border-b-2 border-[#8bc34a]/30 pb-1 mb-2">
                <span className="text-xs">Stopped</span>
                <span className="text-xs">Auto</span>
                <span className="text-xs">F</span>
              </div>
              
              <div className="flex-1 flex flex-col justify-center gap-2">
                <div className="flex justify-between">
                  <span>0.00</span>
                  <span>Hz</span>
                </div>
                <div className="flex justify-between">
                  <span>0.00</span>
                  <span>A</span>
                </div>
                <div className="flex justify-between text-[#8bc34a]/70">
                  <span>529.38</span>
                  <span>VDC</span>
                </div>
              </div>
              
              <div className="border-t-2 border-[#8bc34a]/30 pt-1 mt-2 text-xs flex justify-between">
                <span>REF</span>
                <span>PAR#</span>
                <span>TEXT</span>
              </div>
            </div>

            {/* Keypad */}
            <div className="grid grid-cols-3 gap-3 w-[80%]">
              <button className="w-full aspect-square rounded-full bg-[#111] border-2 border-[#333] flex justify-center items-center active:scale-95 transition-transform hover:bg-[#222]">
                <Folder className="w-5 h-5 text-white/70" />
              </button>
              <button className="w-full aspect-square rounded-full bg-[#111] border-2 border-[#333] flex justify-center items-center active:scale-95 transition-transform hover:bg-[#222]">
                <ArrowUp className="w-5 h-5 text-white/70" />
              </button>
              <button className="w-full aspect-square rounded-full bg-[#111] border-2 border-[#333] flex justify-center items-center active:scale-95 transition-transform text-white/70 text-xs font-bold hover:bg-[#222]">
                ESC
              </button>
              
              <button className="w-full aspect-square rounded-full bg-[#111] border-2 border-[#333] flex justify-center items-center active:scale-95 transition-transform hover:bg-[#222]">
                <ArrowLeft className="w-5 h-5 text-white/70" />
              </button>
              <button className="w-full aspect-square rounded-full bg-[#111] border-2 border-primary flex justify-center items-center active:scale-95 transition-transform hover:bg-[#222]">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </button>
              <button className="w-full aspect-square rounded-full bg-[#111] border-2 border-[#333] flex justify-center items-center active:scale-95 transition-transform hover:bg-[#222]">
                <ArrowRight className="w-5 h-5 text-white/70" />
              </button>
              
              <button className="w-full aspect-square rounded-full bg-[#1a3a1a] border-2 border-success flex justify-center items-center active:scale-95 transition-transform hover:bg-success/20">
                <div className="w-3 h-4 bg-success rounded-sm" />
              </button>
              <button className="w-full aspect-square rounded-full bg-[#111] border-2 border-[#333] flex justify-center items-center active:scale-95 transition-transform hover:bg-[#222]">
                <ArrowDown className="w-5 h-5 text-white/70" />
              </button>
              <button className="w-full aspect-square rounded-full bg-[#3a1a1a] border-2 border-destructive flex justify-center items-center active:scale-95 transition-transform hover:bg-destructive/20">
                <div className="w-4 h-4 rounded-full bg-destructive" />
              </button>
            </div>
          </div>
        </div>

        {/* Live Status Cards */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="text-lg font-bold flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-primary" />
            <span>القراءات الحالية</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatusCard 
              icon={Activity} 
              titleAr="تردد الخرج" 
              titleEn="Output Frequency" 
              value="60.27" 
              unit="Hz" 
              color="text-primary" 
              bg="bg-primary/10 border-primary/20" 
            />
            <StatusCard 
              icon={Zap} 
              titleAr="جهد حافلة DC" 
              titleEn="DC Bus Volts" 
              value="529.38" 
              unit="VDC" 
              color="text-warning" 
              bg="bg-warning/10 border-warning/20" 
            />
            <StatusCard 
              icon={Thermometer} 
              titleAr="حرارة الدرايف" 
              titleEn="Drive Temp" 
              value="42.40" 
              unit="°C" 
              color="text-emerald-400" 
              bg="bg-emerald-500/10 border-emerald-500/20" 
            />
            <StatusCard 
              icon={Cpu} 
              titleAr="حرارة IGBT" 
              titleEn="IGBT Temp" 
              value="51.30" 
              unit="°C" 
              color="text-orange-400" 
              bg="bg-orange-500/10 border-orange-500/20" 
            />
          </div>

          <div className="mt-4 bg-card border border-border rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="absolute right-0 top-0 w-1 h-full bg-primary" />
            <h3 className="font-bold text-lg mb-2">كيف أبدأ؟</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              إذا كنت جديداً على PowerFlex 753، ننصحك بالبدء من دليل استخدام لوحة التحكم (HIM) لمعرفة كيفية التنقل بين البارامترات، ثم مراجعة قسم "المرجع السريع" لمعرفة أهم 30 بارامتر تحتاجها للتشغيل الأساسي.
            </p>
            <div className="flex gap-3">
              <a href="/him-guide" className="bg-primary/20 text-primary hover:bg-primary/30 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                دليل لوحة التحكم
              </a>
              <a href="/quick-ref" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg text-sm font-bold transition-colors border border-border">
                المرجع السريع
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusCard({ icon: Icon, titleAr, titleEn, value, unit, color, bg }: any) {
  return (
    <div className={`p-5 rounded-xl border ${bg} flex flex-col gap-3 relative overflow-hidden`}>
      <div className="flex justify-between items-start">
        <div className={`p-2 rounded-lg bg-black/20 ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="text-left font-mono text-[10px] text-muted-foreground opacity-70 uppercase tracking-widest">{titleEn}</div>
      </div>
      <div>
        <h3 className="text-foreground font-bold mb-1">{titleAr}</h3>
        <div className="flex items-baseline gap-1">
          <span className={`text-3xl font-bold font-mono tracking-tight ${color}`}>{value}</span>
          <span className="text-muted-foreground font-mono text-sm">{unit}</span>
        </div>
      </div>
    </div>
  );
}

function TerminalSquareIcon(props: any) {
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
      <path d="m7 11 2-2-2-2" />
      <path d="M11 13h4" />
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    </svg>
  )
}