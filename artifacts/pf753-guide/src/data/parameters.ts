export type RW = 'R' | 'RW';

export interface Parameter {
  id: number;
  nameEn: string;
  nameAr: string;
  range: string;
  defaultVal: string;
  unit: string;
  rw: RW;
  group: string;
}

export interface FaultCode {
  code: string;
  nameEn: string;
  nameAr: string;
  cause: string;
  solution: string;
}

export const parameterGroups = [
  { id: 'monitoring', nameEn: 'Monitoring', nameAr: 'المراقبة', start: 1, end: 99, color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { id: 'motor', nameEn: 'Motor Data', nameAr: 'بيانات الموتور', start: 27, end: 99, color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
  { id: 'speed', nameEn: 'Speed Reference', nameAr: 'مرجع السرعة', start: 90, end: 199, color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  { id: 'control', nameEn: 'Control', nameAr: 'التحكم', start: 300, end: 399, color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  { id: 'protection', nameEn: 'Protection', nameAr: 'الحماية', start: 400, end: 499, color: 'bg-red-500/20 text-red-400 border-red-500/30' },
  { id: 'diagnostics', nameEn: 'Diagnostics', nameAr: 'التشخيصات', start: 900, end: 999, color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' }
];

export const parameters: Parameter[] = [
  // Monitoring
  { id: 1, nameEn: 'Output Frequency', nameAr: 'تردد الخرج', range: '0–500', defaultVal: '—', unit: 'Hz', rw: 'R', group: 'monitoring' },
  { id: 2, nameEn: 'Commanded Freq', nameAr: 'التردد المأمور', range: '0–500', defaultVal: '—', unit: 'Hz', rw: 'R', group: 'monitoring' },
  { id: 3, nameEn: 'Output Current', nameAr: 'تيار الخرج', range: '0–Drive Max', defaultVal: '—', unit: 'Amps', rw: 'R', group: 'monitoring' },
  { id: 4, nameEn: 'Output Voltage', nameAr: 'جهد الخرج', range: '0–Drive Max', defaultVal: '—', unit: 'VAC', rw: 'R', group: 'monitoring' },
  { id: 5, nameEn: 'Output Power', nameAr: 'قدرة الخرج', range: '—Rated–Rated', defaultVal: '—', unit: 'kW', rw: 'R', group: 'monitoring' },
  { id: 6, nameEn: 'Output Torque', nameAr: 'عزم الخرج', range: '—800–800', defaultVal: '—', unit: '%', rw: 'R', group: 'monitoring' },
  { id: 7, nameEn: 'Motor Speed', nameAr: 'سرعة الموتور', range: '0–65535', defaultVal: '—', unit: 'RPM', rw: 'R', group: 'monitoring' },
  { id: 8, nameEn: 'Elapsed MWH', nameAr: 'طاقة كيلو واط ساعة', range: '0–65535', defaultVal: '—', unit: 'MWH', rw: 'R', group: 'monitoring' },
  { id: 9, nameEn: 'Elapsed Run Time', nameAr: 'وقت التشغيل', range: '0–65535', defaultVal: '—', unit: 'Hours', rw: 'R', group: 'monitoring' },
  { id: 10, nameEn: 'DC Bus Memory', nameAr: 'ذاكرة حافلة DC', range: '0–1200', defaultVal: '—', unit: 'VDC', rw: 'R', group: 'monitoring' },
  { id: 11, nameEn: 'DC Bus Volts', nameAr: 'جهد حافلة DC', range: '0–1200', defaultVal: '—', unit: 'VDC', rw: 'R', group: 'monitoring' },
  { id: 12, nameEn: 'Drive Temp', nameAr: 'درجة حرارة الدرايف', range: '—40–200', defaultVal: '—', unit: 'DegC', rw: 'R', group: 'monitoring' },
  { id: 13, nameEn: 'Drive Status 1', nameAr: 'حالة الدرايف 1', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'monitoring' },
  { id: 14, nameEn: 'Drive Status 2', nameAr: 'حالة الدرايف 2', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'monitoring' },
  { id: 15, nameEn: 'Testpoint Data', nameAr: 'بيانات نقطة الاختبار', range: '—', defaultVal: '—', unit: '—', rw: 'R', group: 'monitoring' },
  { id: 16, nameEn: 'Testpoint Sel', nameAr: 'اختيار نقطة الاختبار', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'monitoring' },
  { id: 17, nameEn: 'Motor OL Count', nameAr: 'عداد حماية الموتور', range: '0–600', defaultVal: '—', unit: 'sec', rw: 'R', group: 'monitoring' },
  { id: 18, nameEn: 'Vout/Vin Ratio', nameAr: 'نسبة الجهد', range: '0–200', defaultVal: '—', unit: '%', rw: 'R', group: 'monitoring' },
  { id: 19, nameEn: 'Firmware Version', nameAr: 'إصدار البرنامج', range: '—', defaultVal: '—', unit: '—', rw: 'R', group: 'monitoring' },
  { id: 20, nameEn: 'Drive Type', nameAr: 'نوع الدرايف', range: '—', defaultVal: '—', unit: '—', rw: 'R', group: 'monitoring' },

  // Motor Data
  { id: 27, nameEn: 'Motor NP Volts', nameAr: 'جهد اسمي موتور', range: '1–690', defaultVal: 'Per rating', unit: 'VAC', rw: 'RW', group: 'motor' },
  { id: 28, nameEn: 'Motor NP Hz', nameAr: 'تردد اسمي موتور', range: '1–500', defaultVal: '60', unit: 'Hz', rw: 'RW', group: 'motor' },
  { id: 29, nameEn: 'Motor OL Current', nameAr: 'تيار الحماية الحرارية', range: '0.1–Drive Rated', defaultVal: 'Per rating', unit: 'Amps', rw: 'RW', group: 'motor' },
  { id: 30, nameEn: 'Motor NP RPM', nameAr: 'سرعة اسمية موتور', range: '1–65535', defaultVal: 'Per rating', unit: 'RPM', rw: 'RW', group: 'motor' },
  { id: 31, nameEn: 'Motor NP Power', nameAr: 'قدرة اسمية موتور', range: '0.01–6553.5', defaultVal: 'Per rating', unit: 'kW', rw: 'RW', group: 'motor' },
  { id: 32, nameEn: 'Motor NP PF', nameAr: 'معامل القدرة', range: '0.01–1.00', defaultVal: '0.85', unit: '—', rw: 'RW', group: 'motor' },
  { id: 33, nameEn: 'Auto Amps Limit', nameAr: 'حد التيار التلقائي', range: '0–200', defaultVal: '150', unit: '%', rw: 'RW', group: 'motor' },
  { id: 34, nameEn: 'Min Frequency', nameAr: 'أقل تردد', range: '0–500', defaultVal: '0', unit: 'Hz', rw: 'RW', group: 'motor' },
  { id: 35, nameEn: 'Maximum Frequency', nameAr: 'أقصى تردد', range: '0–500', defaultVal: '60', unit: 'Hz', rw: 'RW', group: 'motor' },
  { id: 36, nameEn: 'Base Frequency', nameAr: 'التردد الأساسي', range: '0–500', defaultVal: '60', unit: 'Hz', rw: 'RW', group: 'motor' },
  { id: 37, nameEn: 'Base Voltage', nameAr: 'الجهد الأساسي', range: '0–690', defaultVal: '460', unit: 'VAC', rw: 'RW', group: 'motor' },
  { id: 38, nameEn: 'Motor NP FLA', nameAr: 'تيار الحمل الكامل', range: '0–Drive Max', defaultVal: 'Per rating', unit: 'Amps', rw: 'RW', group: 'motor' },

  // Speed Reference
  { id: 90, nameEn: 'Speed Ref A Sel', nameAr: 'مصدر مرجع السرعة A', range: '0–27', defaultVal: '1', unit: '—', rw: 'RW', group: 'speed' },
  { id: 91, nameEn: 'Speed Ref B Sel', nameAr: 'مصدر مرجع السرعة B', range: '0–27', defaultVal: '7', unit: '—', rw: 'RW', group: 'speed' },
  { id: 93, nameEn: 'Jog Speed', nameAr: 'سرعة التشغيل المؤقت', range: '0–500', defaultVal: '10', unit: 'Hz', rw: 'RW', group: 'speed' },
  { id: 94, nameEn: 'Preset Speed 1', nameAr: 'سرعة مسبقة 1', range: '0–500', defaultVal: '5', unit: 'Hz', rw: 'RW', group: 'speed' },
  { id: 95, nameEn: 'Preset Speed 2', nameAr: 'سرعة مسبقة 2', range: '0–500', defaultVal: '10', unit: 'Hz', rw: 'RW', group: 'speed' },
  { id: 96, nameEn: 'Preset Speed 3', nameAr: 'سرعة مسبقة 3', range: '0–500', defaultVal: '20', unit: 'Hz', rw: 'RW', group: 'speed' },
  { id: 97, nameEn: 'Preset Speed 4', nameAr: 'سرعة مسبقة 4', range: '0–500', defaultVal: '30', unit: 'Hz', rw: 'RW', group: 'speed' },
  { id: 98, nameEn: 'Preset Speed 5', nameAr: 'سرعة مسبقة 5', range: '0–500', defaultVal: '40', unit: 'Hz', rw: 'RW', group: 'speed' },
  { id: 99, nameEn: 'Preset Speed 6', nameAr: 'سرعة مسبقة 6', range: '0–500', defaultVal: '50', unit: 'Hz', rw: 'RW', group: 'speed' },
  { id: 100, nameEn: 'Preset Speed 7', nameAr: 'سرعة مسبقة 7', range: '0–500', defaultVal: '60', unit: 'Hz', rw: 'RW', group: 'speed' },
  { id: 101, nameEn: 'Skip Frequency 1', nameAr: 'تردد التخطي 1', range: '0–500', defaultVal: '0', unit: 'Hz', rw: 'RW', group: 'speed' },
  { id: 102, nameEn: 'Skip Freq 1 Band', nameAr: 'نطاق التخطي 1', range: '0–30', defaultVal: '0', unit: 'Hz', rw: 'RW', group: 'speed' },
  { id: 103, nameEn: 'Skip Frequency 2', nameAr: 'تردد التخطي 2', range: '0–500', defaultVal: '0', unit: 'Hz', rw: 'RW', group: 'speed' },
  { id: 107, nameEn: 'Encoder Z Chan', nameAr: 'قناة الشفرة Z', range: '0–1', defaultVal: '1', unit: '—', rw: 'RW', group: 'speed' },
  { id: 120, nameEn: 'Accel Time 1', nameAr: 'وقت التسارع 1', range: '0.0–3276.7', defaultVal: '10.0', unit: 'sec', rw: 'RW', group: 'speed' },
  { id: 121, nameEn: 'Decel Time 1', nameAr: 'وقت التباطؤ 1', range: '0.0–3276.7', defaultVal: '10.0', unit: 'sec', rw: 'RW', group: 'speed' },
  { id: 122, nameEn: 'Accel Time 2', nameAr: 'وقت التسارع 2', range: '0.0–3276.7', defaultVal: '20.0', unit: 'sec', rw: 'RW', group: 'speed' },
  { id: 123, nameEn: 'Decel Time 2', nameAr: 'وقت التباطؤ 2', range: '0.0–3276.7', defaultVal: '20.0', unit: 'sec', rw: 'RW', group: 'speed' },
  { id: 124, nameEn: 'S Curve %', nameAr: 'منحنى S', range: '0–100', defaultVal: '0', unit: '%', rw: 'RW', group: 'speed' },
  { id: 125, nameEn: 'DC Brake Time', nameAr: 'وقت فرملة DC', range: '0.0–90.0', defaultVal: '0.0', unit: 'sec', rw: 'RW', group: 'speed' },
  { id: 126, nameEn: 'DC Brake Level', nameAr: 'مستوى فرملة DC', range: '0–100', defaultVal: '0', unit: '%', rw: 'RW', group: 'speed' },
  { id: 127, nameEn: 'DC Brk Frq', nameAr: 'تردد فرملة DC', range: '0.0–500', defaultVal: '0', unit: 'Hz', rw: 'RW', group: 'speed' },

  // Control
  { id: 300, nameEn: 'Control Mode', nameAr: 'وضع التحكم', range: '0=V/Hz, 1=SVC, 2=FVC', defaultVal: '0', unit: '—', rw: 'RW', group: 'control' },
  { id: 301, nameEn: 'Start Source 1', nameAr: 'مصدر الإقلاع 1', range: '0–6', defaultVal: '1 (HIM)', unit: '—', rw: 'RW', group: 'control' },
  { id: 302, nameEn: 'Stop Mode 1', nameAr: 'وضع الإيقاف 1', range: '0=Ramp, 1=Coast, 2=DC Brake', defaultVal: '0', unit: '—', rw: 'RW', group: 'control' },
  { id: 303, nameEn: 'Reverse Disable', nameAr: 'تعطيل الاتجاه العكسي', range: '0=Enabled, 1=Disabled', defaultVal: '0', unit: '—', rw: 'RW', group: 'control' },
  { id: 304, nameEn: 'Flying Start En', nameAr: 'تفعيل الإقلاع الطائر', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'control' },
  { id: 305, nameEn: 'Flying Start Gain', nameAr: 'كسب الإقلاع الطائر', range: '0.0–1.0', defaultVal: '0.5', unit: '—', rw: 'RW', group: 'control' },
  { id: 306, nameEn: 'Torque Perf Mode', nameAr: 'وضع أداء العزم', range: '0–3', defaultVal: '0', unit: '—', rw: 'RW', group: 'control' },
  { id: 307, nameEn: 'Motor Cntl Mode', nameAr: 'وضع تحكم الموتور', range: '0–5', defaultVal: '0', unit: '—', rw: 'RW', group: 'control' },
  { id: 350, nameEn: 'Carrier Frequency', nameAr: 'تردد الناقل', range: '2–16', defaultVal: '4', unit: 'kHz', rw: 'RW', group: 'control' },
  { id: 380, nameEn: 'Kp Speed Loop', nameAr: 'ربح تناسبي سرعة', range: '0.0–1000.0', defaultVal: '5.0', unit: '—', rw: 'RW', group: 'control' },
  { id: 381, nameEn: 'Ki Speed Loop', nameAr: 'ربح تكاملي سرعة', range: '0.0–1000.0', defaultVal: '1.0', unit: '—', rw: 'RW', group: 'control' },
  { id: 382, nameEn: 'Kd Speed Loop', nameAr: 'ربح اشتقاقي سرعة', range: '0.0–1000.0', defaultVal: '0', unit: '—', rw: 'RW', group: 'control' },

  // Protection
  { id: 400, nameEn: 'Over Voltage Lvl', nameAr: 'مستوى الجهد الزائد', range: '115–810', defaultVal: '760', unit: 'VDC', rw: 'RW', group: 'protection' },
  { id: 401, nameEn: 'Under Voltage Lvl', nameAr: 'مستوى الجهد الناقص', range: '1–810', defaultVal: '280', unit: 'VDC', rw: 'RW', group: 'protection' },
  { id: 402, nameEn: 'Motor OL Select', nameAr: 'اختيار حماية الموتور', range: '0–3', defaultVal: '1', unit: '—', rw: 'RW', group: 'protection' },
  { id: 403, nameEn: 'Motor OL Hertz', nameAr: 'تردد حماية الموتور', range: '0–500', defaultVal: '60', unit: 'Hz', rw: 'RW', group: 'protection' },
  { id: 404, nameEn: 'Ground Warn Lvl', nameAr: 'مستوى تحذير الأرضي', range: '0–600', defaultVal: '0', unit: 'mA', rw: 'RW', group: 'protection' },
  { id: 405, nameEn: 'Ground Fault En', nameAr: 'تفعيل خطأ الأرضي', range: '0–1', defaultVal: '1', unit: '—', rw: 'RW', group: 'protection' },
  { id: 406, nameEn: 'Stall Fault Time', nameAr: 'وقت خطأ الاختناق', range: '0–60', defaultVal: '60', unit: 'sec', rw: 'RW', group: 'protection' },
  { id: 407, nameEn: 'Max Speed', nameAr: 'أقصى سرعة', range: '0–65535', defaultVal: '1750', unit: 'RPM', rw: 'RW', group: 'protection' },
  { id: 420, nameEn: 'Fault Clear', nameAr: 'مسح الأخطاء', range: '0–2', defaultVal: '0', unit: '—', rw: 'RW', group: 'protection' },
  { id: 421, nameEn: 'Fault Config 1', nameAr: 'تهيئة الأخطاء 1', range: 'Bits', defaultVal: '—', unit: '—', rw: 'RW', group: 'protection' },
  { id: 426, nameEn: 'Auto Rstrt Tries', nameAr: 'محاولات إعادة التشغيل', range: '0–9', defaultVal: '0', unit: '—', rw: 'RW', group: 'protection' },
  { id: 427, nameEn: 'Auto Rstrt Delay', nameAr: 'تأخير إعادة التشغيل', range: '0–300', defaultVal: '5.0', unit: 'sec', rw: 'RW', group: 'protection' },
  { id: 430, nameEn: 'Shear Pin 1 Time', nameAr: 'وقت حماية التيار 1', range: '0.0–60.0', defaultVal: '0', unit: 'sec', rw: 'RW', group: 'protection' },
  { id: 431, nameEn: 'Shear Pin 1 Level', nameAr: 'مستوى حماية التيار 1', range: '0–200', defaultVal: '0', unit: '%', rw: 'RW', group: 'protection' },

  // Diagnostics
  { id: 940, nameEn: 'Fault 1 Code', nameAr: 'كود الخطأ 1', range: '0–65535', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics' },
  { id: 941, nameEn: 'Fault 2 Code', nameAr: 'كود الخطأ 2', range: '0–65535', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics' },
  { id: 942, nameEn: 'IGBT Temp C', nameAr: 'درجة حرارة IGBT', range: '—40–200', defaultVal: '—', unit: 'DegC', rw: 'R', group: 'diagnostics' },
  { id: 943, nameEn: 'Drive Temp C', nameAr: 'درجة حرارة الدرايف', range: '—40–200', defaultVal: '—', unit: 'DegC', rw: 'R', group: 'diagnostics' },
  { id: 944, nameEn: 'Drive Temp C 2', nameAr: 'درجة حرارة الدرايف 2', range: '—40–200', defaultVal: '—', unit: 'DegC', rw: 'R', group: 'diagnostics' },
  { id: 945, nameEn: 'Motor Temp C', nameAr: 'درجة حرارة الموتور', range: '—40–200', defaultVal: '—', unit: 'DegC', rw: 'R', group: 'diagnostics' },
  { id: 950, nameEn: 'Fault 1 Time', nameAr: 'وقت الخطأ 1', range: '0–65535', defaultVal: '—', unit: 'min', rw: 'R', group: 'diagnostics' },
  { id: 951, nameEn: 'Fault 2 Time', nameAr: 'وقت الخطأ 2', range: '0–65535', defaultVal: '—', unit: 'min', rw: 'R', group: 'diagnostics' },
  { id: 952, nameEn: 'Fault 3 Time', nameAr: 'وقت الخطأ 3', range: '0–65535', defaultVal: '—', unit: 'min', rw: 'R', group: 'diagnostics' },
  { id: 960, nameEn: 'PID 1 Err', nameAr: 'خطأ PID 1', range: '—', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics' },
];

export const faults: FaultCode[] = [
  { code: 'F02', nameEn: 'Auxiliary Input', nameAr: 'دخل مساعد', cause: 'ترمينال إيقاف مفتوح', solution: 'فحص توصيلات الترمينال' },
  { code: 'F03', nameEn: 'Power Loss', nameAr: 'فقد الطاقة', cause: 'انقطاع الطاقة', solution: 'فحص مصدر الطاقة' },
  { code: 'F04', nameEn: 'UnderVoltage', nameAr: 'جهد ناقص', cause: 'جهد منخفض على DC Bus', solution: 'فحص جهد الشبكة' },
  { code: 'F05', nameEn: 'OverVoltage', nameAr: 'جهد زائد', cause: 'تباطؤ سريع أو جهد شبكة عالي', solution: 'إطالة وقت التباطؤ' },
  { code: 'F06', nameEn: 'Motor Stalled', nameAr: 'توقف الموتور', cause: 'حمل زائد', solution: 'تقليل الحمل' },
  { code: 'F07', nameEn: 'Motor OvrLoad', nameAr: 'حماية حرارية موتور', cause: 'حمل زائد أو تبريد ضعيف', solution: 'تقليل الحمل' },
  { code: 'F08', nameEn: 'Heatsink OvrTmp', nameAr: 'حرارة مشتت حرارة زائدة', cause: 'درجة حرارة عالية', solution: 'تحسين التبريد' },
  { code: 'F12', nameEn: 'HW OverCurrent', nameAr: 'تيار زائد صلب', cause: 'حمل صادم', solution: 'فحص حمل الموتور' },
  { code: 'F13', nameEn: 'Ground Fault', nameAr: 'عطل أرضي', cause: 'عزل سلك تالف', solution: 'فحص الموتور والكابلات' },
  { code: 'F38', nameEn: 'Phase U to Gnd', nameAr: 'عطل وجه U للأرض', cause: 'كابل تالف', solution: 'فحص الكابل' },
  { code: 'F63', nameEn: 'SW OverCurrent', nameAr: 'تيار زائد برمجي', cause: 'إعداد خاطئ', solution: 'مراجعة حدود التيار' },
  { code: 'F81', nameEn: 'Comm Loss', nameAr: 'فقد الاتصال', cause: 'كابل شبكة تالف', solution: 'فحص كابل الاتصالات' },
];

export const quickReferenceIds = [
  1, 2, 3, 4, 7, 11, 12, 27, 28, 29, 30, 31, 33, 34, 35, 90, 94, 120, 121, 300, 301, 302, 400, 401, 403, 407, 420, 940, 941, 943
];
