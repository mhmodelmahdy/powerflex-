import React from 'react';
import { Key, Play, Square, Settings, Eye, CornerDownLeft, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Hash, Type, Folder } from 'lucide-react';

export default function HimGuide() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out pb-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
          <Key className="w-8 h-8 text-primary" />
          دليل استخدام لوحة التحكم (HIM)
        </h1>
        <p className="text-muted-foreground">تعرف على وظائف الأزرار وكيفية تغيير البارامترات خطوة بخطوة</p>
      </div>

      {/* Buttons Guide */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-border pb-4">
          <Settings className="w-5 h-5 text-primary" />
          وظائف الأزرار
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ButtonDesc 
            icon={<div className="w-4 h-4 bg-success rounded-sm" />} 
            name="Start" desc="بدء تشغيل الدرايف (إذا كان الإقلاع مبرمجاً من HIM)" 
            bg="bg-[#1a3a1a] border-success" />
          
          <ButtonDesc 
            icon={<div className="w-4 h-4 rounded-full bg-destructive" />} 
            name="Stop" desc="إيقاف الدرايف أو إعادة ضبط الأخطاء" 
            bg="bg-[#3a1a1a] border-destructive" />
            
          <ButtonDesc 
            icon={<CornerDownLeft className="w-4 h-4 text-white" />} 
            name="Enter / Center" desc="تأكيد الاختيار أو الدخول لتعديل القيمة" 
            bg="bg-[#111] border-primary" />
            
          <ButtonDesc 
            icon={<span className="text-xs font-bold text-white">ESC</span>} 
            name="Escape" desc="الرجوع للقائمة السابقة أو إلغاء التعديل" 
            bg="bg-[#111] border-[#333]" />
            
          <ButtonDesc 
            icon={<ArrowUp className="w-4 h-4 text-white" />} 
            name="Up / Down" desc="تصفح القوائم أو زيادة/تقليل القيم" 
            bg="bg-[#111] border-[#333]" />
            
          <ButtonDesc 
            icon={<ArrowLeft className="w-4 h-4 text-white" />} 
            name="Left / Right" desc="التنقل بين الخانات عند إدخال الأرقام" 
            bg="bg-[#111] border-[#333]" />
            
          <ButtonDesc 
            icon={<Hash className="w-4 h-4 text-white" />} 
            name="PAR#" desc="القفز مباشرة إلى رقم بارامتر محدد" 
            bg="bg-[#111] border-[#333]" />
            
          <ButtonDesc 
            icon={<Folder className="w-4 h-4 text-white" />} 
            name="Folders" desc="فتح القائمة الرئيسية" 
            bg="bg-[#111] border-[#333]" />
        </div>
      </div>

      {/* Step by Step Tutorials */}
      <div className="space-y-8">
        <Tutorial 
          title="كيف تقرأ قيمة بارامتر محدد (مثال: P001)"
          steps={[
            { icon: Hash, text: "اضغط على زر PAR#" },
            { icon: Type, text: "أدخل رقم البارامتر باستخدام الأرقام، مثلاً (1)" },
            { icon: CornerDownLeft, text: "اضغط على زر Enter (الزر الأوسط المربع أو سهم الإدخال)" },
            { icon: Eye, text: "ستظهر قيمة البارامتر الحالية على الشاشة الخضراء" }
          ]}
        />

        <Tutorial 
          title="كيف تغير قيمة بارامتر (مثال: تغيير P034 أقل تردد)"
          steps={[
            { icon: Hash, text: "اذهب للبارامتر المطلوب كما في الخطوة السابقة (اضغط PAR# ثم 34 ثم Enter)" },
            { icon: CornerDownLeft, text: "اضغط Enter مرة أخرى للدخول في وضع التعديل (سيبدأ الرقم بالوميض)" },
            { icon: ArrowUp, text: "استخدم الأسهم للأعلى والأسفل لتغيير القيمة، أو اكتبها بالأرقام مباشرة" },
            { icon: CornerDownLeft, text: "اضغط Enter للحفظ (سيتوقف الوميض)" }
          ]}
        />

        <Tutorial 
          title="كيف تمسح خطأ (Fault Reset)"
          steps={[
            { icon: Eye, text: "اقرأ كود الخطأ على الشاشة أولاً وتأكد من حل المشكلة (مثلاً: عودة التيار)" },
            { icon: Square, text: "اضغط على زر الإيقاف الأحمر (Stop) لعمل إعادة ضبط للخطأ" },
            { icon: Settings, text: "طريقة بديلة: اذهب للبارامتر P420 وغيّر قيمته إلى 1 ثم اضغط Enter" }
          ]}
        />
      </div>
    </div>
  );
}

function ButtonDesc({ icon, name, desc, bg }: any) {
  return (
    <div className="flex items-center gap-4 bg-background p-3 rounded-lg border border-border">
      <div className={`w-12 h-12 flex-shrink-0 rounded-full border-2 flex items-center justify-center ${bg} shadow-md`}>
        {icon}
      </div>
      <div>
        <div className="font-mono font-bold text-sm text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground mt-1">{desc}</div>
      </div>
    </div>
  );
}

function Tutorial({ title, steps }: { title: string, steps: any[] }) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden relative group">
      <div className="absolute top-0 right-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors" />
      
      <div className="p-5 border-b border-border bg-card/50">
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      
      <div className="p-5">
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-background border border-primary text-primary flex items-center justify-center font-bold text-sm z-10">
                  {idx + 1}
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-border my-1" />
                )}
              </div>
              <div className="flex-1 bg-background border border-border rounded-lg p-3 flex items-center gap-3 mt-1">
                <div className="p-2 bg-primary/10 rounded text-primary">
                  <step.icon className="w-4 h-4" />
                </div>
                <p className="text-sm font-medium">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}