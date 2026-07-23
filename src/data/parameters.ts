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
  subGroup?: string;
}

export interface FaultCode {
  code: string;
  nameEn: string;
  nameAr: string;
  cause: string;
  solution: string;
}

export const parameterGroups = [
  { id: 'monitor', nameEn: 'Monitor', nameAr: 'المراقبة والقياس', start: 1, end: 22, color: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
  { id: 'motor_control', nameEn: 'Motor Control', nameAr: 'التحكم بالموتور', start: 25, end: 1660, color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  { id: 'feedback_io', nameEn: 'Feedback & I/O', nameAr: 'التغذية الراجعة والمدخلات/المخرجات', start: 150, end: 282, color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  { id: 'drive_cfg', nameEn: 'Drive Cfg', nameAr: 'تهيئة الدرايف', start: 300, end: 409, color: 'bg-sky-500/20 text-sky-400 border-sky-500/30' },
  { id: 'protection', nameEn: 'Protection', nameAr: 'الحماية', start: 409, end: 950, color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  { id: 'speed_control', nameEn: 'Speed Control', nameAr: 'التحكم بالسرعة', start: 520, end: 577, color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
  { id: 'torque_control', nameEn: 'Torque Control', nameAr: 'التحكم بالعزم', start: 675, end: 685, color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  { id: 'communication', nameEn: 'Communication', nameAr: 'الاتصالات', start: 871, end: 912, color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
  { id: 'diagnostics', nameEn: 'Diagnostics', nameAr: 'التشخيصات', start: 930, end: 953, color: 'bg-lime-500/20 text-lime-400 border-lime-500/30' }
];

export const parameters: Parameter[] = [
  // ==================== 1. FILE: Monitor ====================
  // Group: Metering
  { id: 1, nameEn: 'Output Frequency', nameAr: 'تردد الخرج', range: '0–500', defaultVal: '—', unit: 'Hz', rw: 'R', group: 'monitor', subGroup: 'Metering' },
  { id: 2, nameEn: 'Commanded SpdRef', nameAr: 'مرجع السرعة المأمور', range: '0–500', defaultVal: '—', unit: 'Hz', rw: 'R', group: 'monitor', subGroup: 'Metering' },
  { id: 3, nameEn: 'Mtr Vel Fdbk', nameAr: 'تغذية راجعة سرعة الموتور', range: '0–65535', defaultVal: '—', unit: 'RPM', rw: 'R', group: 'monitor', subGroup: 'Metering' },
  { id: 4, nameEn: 'Commanded Trq', nameAr: 'العزم المأمور', range: '—800–800', defaultVal: '—', unit: '%', rw: 'R', group: 'monitor', subGroup: 'Metering' },
  { id: 5, nameEn: 'Torque Cur Fdbk', nameAr: 'تغذية راجعة تيار العزم', range: '0–Drive Max', defaultVal: '—', unit: 'Amps', rw: 'R', group: 'monitor', subGroup: 'Metering' },
  { id: 6, nameEn: 'Flux Cur Fdbk', nameAr: 'تغذية راجعة تيار الفيض', range: '0–Drive Max', defaultVal: '—', unit: 'Amps', rw: 'R', group: 'monitor', subGroup: 'Metering' },
  { id: 7, nameEn: 'Output Current', nameAr: 'تيار الخرج', range: '0–Drive Max', defaultVal: '—', unit: 'Amps', rw: 'R', group: 'monitor', subGroup: 'Metering' },
  { id: 8, nameEn: 'Output Voltage', nameAr: 'جهد الخرج', range: '0–Drive Max', defaultVal: '—', unit: 'VAC', rw: 'R', group: 'monitor', subGroup: 'Metering' },
  { id: 9, nameEn: 'Output Power', nameAr: 'قدرة الخرج', range: '—Rated–Rated', defaultVal: '—', unit: 'kW', rw: 'R', group: 'monitor', subGroup: 'Metering' },
  { id: 11, nameEn: 'DC Bus Volts', nameAr: 'جهد حافلة المستمر DC', range: '0–1200', defaultVal: '—', unit: 'VDC', rw: 'R', group: 'monitor', subGroup: 'Metering' },

  // Group: Drive Data
  { id: 20, nameEn: 'Rated Volts', nameAr: 'الجهد الاسمي للدرايف', range: '—', defaultVal: 'Per rating', unit: 'VAC', rw: 'R', group: 'monitor', subGroup: 'Drive Data' },
  { id: 21, nameEn: 'Rated Amps', nameAr: 'التيار الاسمي للدرايف', range: '—', defaultVal: 'Per rating', unit: 'Amps', rw: 'R', group: 'monitor', subGroup: 'Drive Data' },
  { id: 22, nameEn: 'Rated kW', nameAr: 'القدرة الاسمية بالماكينة kW', range: '—', defaultVal: 'Per rating', unit: 'kW', rw: 'R', group: 'monitor', subGroup: 'Drive Data' },

  // ==================== 2. FILE: Motor Control ====================
  // Group: Motor Data
  { id: 25, nameEn: 'Motor NP Volts', nameAr: 'جهد الموتور الاسمي', range: '1–690', defaultVal: 'Per rating', unit: 'VAC', rw: 'RW', group: 'motor_control', subGroup: 'Motor Data' },
  { id: 26, nameEn: 'Motor NP Amps', nameAr: 'تيار الموتور الاسمي', range: '0.1–Drive Rated', defaultVal: 'Per rating', unit: 'Amps', rw: 'RW', group: 'motor_control', subGroup: 'Motor Data' },
  { id: 27, nameEn: 'Motor NP Hertz', nameAr: 'تردد الموتور الاسمي', range: '1–500', defaultVal: '60', unit: 'Hz', rw: 'RW', group: 'motor_control', subGroup: 'Motor Data' },
  { id: 28, nameEn: 'Motor NP RPM', nameAr: 'سرعة الموتور الاسمية', range: '1–65535', defaultVal: 'Per rating', unit: 'RPM', rw: 'RW', group: 'motor_control', subGroup: 'Motor Data' },
  { id: 29, nameEn: 'Mtr NP Pwr Units', nameAr: 'وحدات قدرة الموتور', range: '0–1', defaultVal: '0 (kW)', unit: '—', rw: 'RW', group: 'motor_control', subGroup: 'Motor Data' },
  { id: 30, nameEn: 'Motor NP Power', nameAr: 'قدرة الموتور الاسمية', range: '0.01–6553.5', defaultVal: 'Per rating', unit: 'kW', rw: 'RW', group: 'motor_control', subGroup: 'Motor Data' },
  { id: 31, nameEn: 'Motor Poles', nameAr: 'عدد أقطاب الموتور', range: '2–32', defaultVal: '4', unit: '—', rw: 'RW', group: 'motor_control', subGroup: 'Motor Data' },

  // Group: Mtr Ctrl Options
  { id: 35, nameEn: 'Motor Ctrl Mode', nameAr: 'نمط التحكم بالموتور', range: '0=V/Hz, 1=SV, 2=FVC', defaultVal: '0', unit: '—', rw: 'RW', group: 'motor_control', subGroup: 'Mtr Ctrl Options' },
  { id: 36, nameEn: 'Maximum Voltage', nameAr: 'أقصى جهد', range: '0–690', defaultVal: '460', unit: 'VAC', rw: 'RW', group: 'motor_control', subGroup: 'Mtr Ctrl Options' },
  { id: 37, nameEn: 'Maximum Freq', nameAr: 'أقصى تردد', range: '0–500', defaultVal: '60', unit: 'Hz', rw: 'RW', group: 'motor_control', subGroup: 'Mtr Ctrl Options' },
  { id: 38, nameEn: 'PWM Frequency', nameAr: 'تردد التقطيع PWM', range: '2–16', defaultVal: '4', unit: 'kHz', rw: 'RW', group: 'motor_control', subGroup: 'Mtr Ctrl Options' },
  { id: 1660, nameEn: 'IPM Stc OfstSt K', nameAr: 'إزاحة IPM للمستقبلات', range: '—', defaultVal: '0', unit: '—', rw: 'RW', group: 'motor_control', subGroup: 'Mtr Ctrl Options' },

  // Group: Volts per Hertz
  { id: 65, nameEn: 'VHz Curve', nameAr: 'منحنى فولت/هيرتز', range: '0–2', defaultVal: '0', unit: '—', rw: 'RW', group: 'motor_control', subGroup: 'Volts per Hertz' },

  // Group: Autotune
  { id: 70, nameEn: 'Autotune', nameAr: 'الضبط التلقائي', range: '0–2', defaultVal: '0', unit: '—', rw: 'RW', group: 'motor_control', subGroup: 'Autotune' },
  { id: 71, nameEn: 'Autotune Torque', nameAr: 'عزم الضبط التلقائي', range: '0–100', defaultVal: '100', unit: '%', rw: 'RW', group: 'motor_control', subGroup: 'Autotune' },
  { id: 1630, nameEn: 'IPM_Lg_25_pct', nameAr: 'معامل Lg بنسبة 25%', range: '—', defaultVal: '0', unit: '—', rw: 'RW', group: 'motor_control', subGroup: 'Autotune' },
  { id: 1631, nameEn: 'IPM_Lg_50_pct', nameAr: 'معامل Lg بنسبة 50%', range: '—', defaultVal: '0', unit: '—', rw: 'RW', group: 'motor_control', subGroup: 'Autotune' },
  { id: 1632, nameEn: 'IPM_Lg_75_pct', nameAr: 'معامل Lg بنسبة 75%', range: '—', defaultVal: '0', unit: '—', rw: 'RW', group: 'motor_control', subGroup: 'Autotune' },
  { id: 1633, nameEn: 'IPM_Lg_100_pct', nameAr: 'معامل Lg بنسبة 100%', range: '—', defaultVal: '0', unit: '—', rw: 'RW', group: 'motor_control', subGroup: 'Autotune' },
  { id: 1634, nameEn: 'IPM_Lg_125_pct', nameAr: 'معامل Lg بنسبة 125%', range: '—', defaultVal: '0', unit: '—', rw: 'RW', group: 'motor_control', subGroup: 'Autotune' },
  { id: 1635, nameEn: 'IPM_Ld_0_pct', nameAr: 'معامل Ld بنسبة 0%', range: '—', defaultVal: '0', unit: '—', rw: 'RW', group: 'motor_control', subGroup: 'Autotune' },
  { id: 1636, nameEn: 'IPM_Ld_100_pct', nameAr: 'معامل Ld بنسبة 100%', range: '—', defaultVal: '0', unit: '—', rw: 'RW', group: 'motor_control', subGroup: 'Autotune' },

  // ==================== 3. FILE: Feedback & I/O ====================
  // Group: DigIn Functions
  { id: 150, nameEn: 'Digital In Cfg', nameAr: 'تهيئة الدخل الرقمي', range: 'Bits', defaultVal: '—', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 155, nameEn: 'DI Enable', nameAr: 'تفعيل الدخل الرقمي', range: '0–1', defaultVal: '1', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 156, nameEn: 'DI Clear Fault', nameAr: 'دخل رقمي مسح الأخطاء', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 157, nameEn: 'DI Aux Fault', nameAr: 'دخل رقمي عطل مساعد', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 158, nameEn: 'DI Stop', nameAr: 'دخل رقمي إيقاف', range: '0–1', defaultVal: '1', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 159, nameEn: 'DI Cur Lmt Stop', nameAr: 'دخل رقمي إيقاف حد التيار', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 160, nameEn: 'DI Coast Stop', nameAr: 'دخل رقمي إيقاف حر', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 161, nameEn: 'DI Start', nameAr: 'دخل رقمي تشغيل', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 162, nameEn: 'DI Fwd Reverse', nameAr: 'دخل رقمي أمامي/عكسي', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 163, nameEn: 'DI Run', nameAr: 'دخل رقمي دوران', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 164, nameEn: 'DI Run Forward', nameAr: 'دخل رقمي دوران أمامي', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 165, nameEn: 'DI Run Reverse', nameAr: 'دخل رقمي دوران عكسي', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 166, nameEn: 'DI Jog 1', nameAr: 'دخل رقمي حركة بطيئة 1', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 167, nameEn: 'DI Jog 1 Forward', nameAr: 'دخل رقمي حركة بطيئة 1 أمامي', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 168, nameEn: 'DI Jog 1 Reverse', nameAr: 'دخل رقمي حركة بطيئة 1 عكسي', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 169, nameEn: 'DI Jog 2', nameAr: 'دخل رقمي حركة بطيئة 2', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 170, nameEn: 'DI Jog 2 Forward', nameAr: 'دخل رقمي حركة بطيئة 2 أمامي', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 171, nameEn: 'DI Jog 2 Reverse', nameAr: 'دخل رقمي حركة بطيئة 2 عكسي', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 172, nameEn: 'DI Manual Ctrl', nameAr: 'دخل رقمي تحكم يدوي', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 173, nameEn: 'DI Speed Sel 0', nameAr: 'دخل رقمي اختيار السرعة 0', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 174, nameEn: 'DI Speed Sel 1', nameAr: 'دخل رقمي اختيار السرعة 1', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 175, nameEn: 'DI Speed Sel 2', nameAr: 'دخل رقمي اختيار السرعة 2', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 176, nameEn: 'DI HOA Start', nameAr: 'دخل رقمي تشغيل HOA', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 179, nameEn: 'DI Accel 2', nameAr: 'دخل رقمي تسارع 2', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },
  { id: 180, nameEn: 'DI Decel 2', nameAr: 'دخل رقمي تباطؤ 2', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'DigIn Functions' },

  // Group: Control Board IO / Digital Inputs
  { id: 220, nameEn: 'Digital In Sts', nameAr: 'حالة المدخلات الرقمية', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'feedback_io', subGroup: 'Digital Inputs' },
  { id: 222, nameEn: 'Dig In Filt Mask', nameAr: 'قناع فلتر الدخل الرقمي', range: 'Bits', defaultVal: '—', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'Digital Inputs' },
  { id: 223, nameEn: 'Dig In Filt', nameAr: 'فلتر الدخل الرقمي', range: '0–100', defaultVal: '0', unit: 'ms', rw: 'RW', group: 'feedback_io', subGroup: 'Digital Inputs' },

  // Group: Digital Outputs
  { id: 225, nameEn: 'Dig Out Sts', nameAr: 'حالة المخرجات الرقمية', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'feedback_io', subGroup: 'Digital Outputs' },
  { id: 226, nameEn: 'Dig Out Invert', nameAr: 'عكس المخرج الرقمي', range: 'Bits', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'Digital Outputs' },
  { id: 230, nameEn: 'RO0 Sel', nameAr: 'اختيار ريلاي الخرج 0', range: '0–50', defaultVal: '1', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'Digital Outputs' },
  { id: 231, nameEn: 'RO0 Level Sel', nameAr: 'اختيار مستوى ريلاي الخرج 0', range: '0–50', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'Digital Outputs' },
  { id: 232, nameEn: 'RO0 Level', nameAr: 'مستوى ريلاي الخرج 0', range: '—', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'Digital Outputs' },
  { id: 233, nameEn: 'RO0 Level CmpSts', nameAr: 'حالة مقارنة مستوى ريلاي الخرج 0', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'feedback_io', subGroup: 'Digital Outputs' },
  { id: 240, nameEn: 'TO0 Sel', nameAr: 'اختيار الخرج الترانزستوري 0', range: '0–50', defaultVal: '1', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'Digital Outputs' },
  { id: 241, nameEn: 'TO0 Level Sel', nameAr: 'اختيار مستوى الخرج الترانزستوري 0', range: '0–50', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'Digital Outputs' },
  { id: 242, nameEn: 'TO0 Level', nameAr: 'مستوى الخرج الترانزستوري 0', range: '—', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'Digital Outputs' },
  { id: 243, nameEn: 'TO0 Level CmpSts', nameAr: 'حالة مقارنة مستوى الخرج الترانزستوري 0', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'feedback_io', subGroup: 'Digital Outputs' },

  // Group: Motor PTC
  { id: 250, nameEn: 'PTC Cfg', nameAr: 'تهيئة حماية الحرارة PTC', range: '0–2', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'Motor PTC' },
  { id: 251, nameEn: 'PTC Status', nameAr: 'حالة حماية الحرارة PTC', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'feedback_io', subGroup: 'Motor PTC' },

  // Group: Analog Inputs
  { id: 255, nameEn: 'Anlg In Type', nameAr: 'نوع الدخل التماثلي', range: '0–3', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'Analog Inputs' },
  { id: 260, nameEn: 'Anlg In0 Value', nameAr: 'قيمة الدخل التماثلي 0', range: '—', defaultVal: '—', unit: 'V/mA', rw: 'R', group: 'feedback_io', subGroup: 'Analog Inputs' },
  { id: 261, nameEn: 'Anlg In0 Hi', nameAr: 'أقصى قيمة للدخل التماثلي 0', range: '—', defaultVal: '10.0', unit: 'V', rw: 'RW', group: 'feedback_io', subGroup: 'Analog Inputs' },
  { id: 262, nameEn: 'Anlg In0 Lo', nameAr: 'أدنى قيمة للدخل التماثلي 0', range: '—', defaultVal: '0.0', unit: 'V', rw: 'RW', group: 'feedback_io', subGroup: 'Analog Inputs' },

  // Group: Analog Outputs
  { id: 270, nameEn: 'Anlg Out Type', nameAr: 'نوع الخرج التماثلي', range: '0–3', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'Analog Outputs' },
  { id: 275, nameEn: 'Anlg Out0 Sel', nameAr: 'اختيار الخرج التماثلي 0', range: '0–50', defaultVal: '0', unit: '—', rw: 'RW', group: 'feedback_io', subGroup: 'Analog Outputs' },
  { id: 277, nameEn: 'Anlg Out0 Data', nameAr: 'بيانات الخرج التماثلي 0', range: '—', defaultVal: '—', unit: '—', rw: 'R', group: 'feedback_io', subGroup: 'Analog Outputs' },
  { id: 278, nameEn: 'Anlg Out0 DataHi', nameAr: 'بيانات الخرج التماثلي 0 العليا', range: '—', defaultVal: '100.0', unit: '%', rw: 'RW', group: 'feedback_io', subGroup: 'Analog Outputs' },
  { id: 279, nameEn: 'Anlg Out0 DataLo', nameAr: 'بيانات الخرج التماثلي 0 السفلى', range: '—', defaultVal: '0.0', unit: '%', rw: 'RW', group: 'feedback_io', subGroup: 'Analog Outputs' },
  { id: 280, nameEn: 'Anlg Out0 Hi', nameAr: 'أقصى قيمة للخرج التماثلي 0', range: '—', defaultVal: '10.0', unit: 'V', rw: 'RW', group: 'feedback_io', subGroup: 'Analog Outputs' },
  { id: 281, nameEn: 'Anlg Out0 Lo', nameAr: 'أدنى قيمة للخرج التماثلي 0', range: '—', defaultVal: '0.0', unit: 'V', rw: 'RW', group: 'feedback_io', subGroup: 'Analog Outputs' },
  { id: 282, nameEn: 'Anlg Out0 Val', nameAr: 'قيمة الخرج التماثلي 0', range: '—', defaultVal: '—', unit: 'V/mA', rw: 'R', group: 'feedback_io', subGroup: 'Analog Outputs' },

  // ==================== 4. FILE: Drive Cfg ====================
  // Group: Preferences
  { id: 300, nameEn: 'Speed Units', nameAr: 'وحدات السرعة', range: '0=Hz, 1=RPM', defaultVal: '0', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Preferences' },
  { id: 301, nameEn: 'Access Level', nameAr: 'مستوى الصلاحيات', range: '0–2', defaultVal: '1', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Preferences' },
  { id: 302, nameEn: 'Language', nameAr: 'اللغة', range: '0–10', defaultVal: '1', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Preferences' },

  // Group: Control Cfg
  { id: 305, nameEn: 'Voltage Class', nameAr: 'فئة الجهد', range: '0–5', defaultVal: '2', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Control Cfg' },
  { id: 306, nameEn: 'Duty Rating', nameAr: 'صنف الخدمة / التدفئة', range: '0–2', defaultVal: '0', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Control Cfg' },
  { id: 308, nameEn: 'Direction Mode', nameAr: 'نمط اتجاه الدوران', range: '0–2', defaultVal: '0', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Control Cfg' },
  { id: 309, nameEn: 'SpdTrqPsn Mode A', nameAr: 'نمط سرعة/عزم/موقع A', range: '0–5', defaultVal: '0', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Control Cfg' },

  // Group: Auto Manual Ctrl
  { id: 324, nameEn: 'Logic Mask', nameAr: 'قناع المنطق', range: 'Bits', defaultVal: '—', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Auto Manual Ctrl' },
  { id: 325, nameEn: 'Auto Mask', nameAr: 'قناع الأوتوماتيك', range: 'Bits', defaultVal: '—', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Auto Manual Ctrl' },
  { id: 326, nameEn: 'Manual Cmd Mask', nameAr: 'قناع الأمر اليدوي', range: 'Bits', defaultVal: '—', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Auto Manual Ctrl' },
  { id: 327, nameEn: 'Manual Ref Mask', nameAr: 'قناع مرجع التحكم اليدوي', range: 'Bits', defaultVal: '—', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Auto Manual Ctrl' },
  { id: 328, nameEn: 'Alt Man Ref Sel', nameAr: 'اختيار مرجع يدوي بديل', range: '0–50', defaultVal: '0', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Auto Manual Ctrl' },
  { id: 329, nameEn: 'Alt Man Ref AnHi', nameAr: 'أقصى قيمة تماثلية للمرجع اليدوي البديل', range: '—', defaultVal: '100.0', unit: '%', rw: 'RW', group: 'drive_cfg', subGroup: 'Auto Manual Ctrl' },
  { id: 330, nameEn: 'Alt Man Ref AnLo', nameAr: 'أدنى قيمة تماثلية للمرجع اليدوي البديل', range: '—', defaultVal: '0.0', unit: '%', rw: 'RW', group: 'drive_cfg', subGroup: 'Auto Manual Ctrl' },
  { id: 331, nameEn: 'Manual Preload', nameAr: 'التحميل المسبق اليدوي', range: '—', defaultVal: '0', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Auto Manual Ctrl' },

  // Group: Braking Features
  { id: 370, nameEn: 'Stop Mode A', nameAr: 'نمط الإيقاف A', range: '0=Ramp, 1=Coast, 2=DC Brake', defaultVal: '0', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Braking Features' },
  { id: 371, nameEn: 'Stop Mode B', nameAr: 'نمط الإيقاف B', range: '0=Ramp, 1=Coast, 2=DC Brake', defaultVal: '0', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Braking Features' },
  { id: 372, nameEn: 'Bus Reg Mode A', nameAr: 'نمط تنظيم الحافلة A', range: '0–2', defaultVal: '1', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Braking Features' },
  { id: 373, nameEn: 'Bus Reg Mode B', nameAr: 'نمط تنظيم الحافلة B', range: '0–2', defaultVal: '1', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Braking Features' },
  { id: 382, nameEn: 'DB Resistor Type', nameAr: 'نوع مقاومة الفرملة', range: '0–2', defaultVal: '0', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Braking Features' },
  { id: 383, nameEn: 'DB Ext Ohms', nameAr: 'قيمة المقاومة الخارجية بالأوم', range: '0.0–1000.0', defaultVal: '0.0', unit: 'Ohms', rw: 'RW', group: 'drive_cfg', subGroup: 'Braking Features' },
  { id: 384, nameEn: 'DB Ext Watts', nameAr: 'قدرة المقاومة الخارجية بالواط', range: '0–65535', defaultVal: '0', unit: 'Watts', rw: 'RW', group: 'drive_cfg', subGroup: 'Braking Features' },
  { id: 385, nameEn: 'DB ExtPulseWatts', nameAr: 'قدرة النبضة للمقاومة الخارجية', range: '0–65535', defaultVal: '0', unit: 'Watts', rw: 'RW', group: 'drive_cfg', subGroup: 'Braking Features' },
  { id: 392, nameEn: 'Stop Dwell Time', nameAr: 'زمن التوقف الثابت', range: '0.0–90.0', defaultVal: '0.0', unit: 'sec', rw: 'RW', group: 'drive_cfg', subGroup: 'Braking Features' },
  { id: 409, nameEn: 'Dec Inhibit Actn', nameAr: 'إجراء منع التباطؤ', range: '0–2', defaultVal: '0', unit: '—', rw: 'RW', group: 'drive_cfg', subGroup: 'Braking Features' },

  // ==================== 5. FILE: Protection ====================
  // Group: Motor Overload
  { id: 410, nameEn: 'Motor OL Actn', nameAr: 'إجراء الحمل الزائد للموتور', range: '0–3', defaultVal: '1', unit: '—', rw: 'RW', group: 'protection', subGroup: 'Motor Overload' },
  { id: 411, nameEn: 'Mtr OL at Pwr Up', nameAr: 'الحمل الزائد عند التشغيل', range: '0–1', defaultVal: '0', unit: '—', rw: 'RW', group: 'protection', subGroup: 'Motor Overload' },
  { id: 412, nameEn: 'Mtr OL Alarm Lvl', nameAr: 'مستوى إنذار الحمل الزائد', range: '0–100', defaultVal: '100', unit: '%', rw: 'RW', group: 'protection', subGroup: 'Motor Overload' },
  { id: 413, nameEn: 'Mtr OL Factor', nameAr: 'معامل الحمل الزائد', range: '0.20–1.50', defaultVal: '1.00', unit: '—', rw: 'RW', group: 'protection', subGroup: 'Motor Overload' },
  { id: 414, nameEn: 'Mtr OL Hertz', nameAr: 'تردد الحمل الزائد', range: '0–500', defaultVal: '60', unit: 'Hz', rw: 'RW', group: 'protection', subGroup: 'Motor Overload' },
  { id: 415, nameEn: 'Mtr OL Reset Lvl', nameAr: 'مستوى إعادة ضبط الحمل الزائد', range: '0–100', defaultVal: '85', unit: '%', rw: 'RW', group: 'protection', subGroup: 'Motor Overload' },
  { id: 416, nameEn: 'MtrOL Reset Time', nameAr: 'زمن إعادة ضبط الحمل الزائد', range: '0–600', defaultVal: '60', unit: 'sec', rw: 'RW', group: 'protection', subGroup: 'Motor Overload' },

  // Group: Load Limits
  { id: 421, nameEn: 'Current Lmt Sel', nameAr: 'اختيار حد التيار', range: '0–3', defaultVal: '0', unit: '—', rw: 'RW', group: 'protection', subGroup: 'Load Limits' },
  { id: 422, nameEn: 'Current Limit 1', nameAr: 'حد التيار 1', range: '0–200', defaultVal: '150', unit: '%', rw: 'RW', group: 'protection', subGroup: 'Load Limits' },
  { id: 434, nameEn: 'Shear Pin Cfg', nameAr: 'تهيئة حماية Shear Pin', range: '0–3', defaultVal: '0', unit: '—', rw: 'RW', group: 'protection', subGroup: 'Load Limits' },
  { id: 435, nameEn: 'Shear Pin 1 Actn', nameAr: 'إجراء حماية Shear Pin 1', range: '0–3', defaultVal: '0', unit: '—', rw: 'RW', group: 'protection', subGroup: 'Load Limits' },
  { id: 436, nameEn: 'Shear Pin1 Level', nameAr: 'مستوى حماية Shear Pin 1', range: '0–200', defaultVal: '0', unit: '%', rw: 'RW', group: 'protection', subGroup: 'Load Limits' },
  { id: 437, nameEn: 'Shear Pin 1 Time', nameAr: 'زمن حماية Shear Pin 1', range: '0.0–60.0', defaultVal: '0.0', unit: 'sec', rw: 'RW', group: 'protection', subGroup: 'Load Limits' },

  // Group: Power Loss
  { id: 449, nameEn: 'Power Loss Actn', nameAr: 'إجراء فقدان الطاقة', range: '0–3', defaultVal: '0', unit: '—', rw: 'RW', group: 'protection', subGroup: 'Power Loss' },
  { id: 450, nameEn: 'Pwr Loss Mode A', nameAr: 'نمط فقدان الطاقة A', range: '0–2', defaultVal: '0', unit: '—', rw: 'RW', group: 'protection', subGroup: 'Power Loss' },

  // Group: Flt/Alarm Cfg
  { id: 950, nameEn: 'Minor Flt Cfg', nameAr: 'تهيئة الأعطال البسيطة', range: 'Bits', defaultVal: '—', unit: '—', rw: 'RW', group: 'protection', subGroup: 'Flt/Alarm Cfg' },

  // ==================== 6. FILE: Speed Control ====================
  // Group: Speed Limits
  { id: 520, nameEn: 'Max Fwd Speed', nameAr: 'أقصى سرعة للأمام', range: '0–500', defaultVal: '60', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Limits' },
  { id: 521, nameEn: 'Max Rev Speed', nameAr: 'أقصى سرعة للخلف', range: '0–500', defaultVal: '60', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Limits' },
  { id: 522, nameEn: 'Min Fwd Speed', nameAr: 'أدنى سرعة للأمام', range: '0–500', defaultVal: '0', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Limits' },
  { id: 523, nameEn: 'Min Rev Speed', nameAr: 'أدنى سرعة للخلف', range: '0–500', defaultVal: '0', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Limits' },

  // Group: Speed Ramp Rates
  { id: 535, nameEn: 'Accel Time 1', nameAr: 'زمن التسارع 1', range: '0.0–3276.7', defaultVal: '10.0', unit: 'sec', rw: 'RW', group: 'speed_control', subGroup: 'Speed Ramp Rates' },
  { id: 536, nameEn: 'Accel Time 2', nameAr: 'زمن التسارع 2', range: '0.0–3276.7', defaultVal: '10.0', unit: 'sec', rw: 'RW', group: 'speed_control', subGroup: 'Speed Ramp Rates' },
  { id: 537, nameEn: 'Decel Time 1', nameAr: 'زمن التباطؤ 1', range: '0.0–3276.7', defaultVal: '10.0', unit: 'sec', rw: 'RW', group: 'speed_control', subGroup: 'Speed Ramp Rates' },
  { id: 538, nameEn: 'Decel Time 2', nameAr: 'زمن التباطؤ 2', range: '0.0–3276.7', defaultVal: '10.0', unit: 'sec', rw: 'RW', group: 'speed_control', subGroup: 'Speed Ramp Rates' },
  { id: 539, nameEn: 'Jog Acc Dec Time', nameAr: 'زمن تسارع/تباطؤ الحركة البطيئة', range: '0.0–3276.7', defaultVal: '10.0', unit: 'sec', rw: 'RW', group: 'speed_control', subGroup: 'Speed Ramp Rates' },

  // Group: Speed Reference
  { id: 545, nameEn: 'Spd Ref A Sel', nameAr: 'اختيار مرجع السرعة A', range: '0–30', defaultVal: '1', unit: '—', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 546, nameEn: 'Spd Ref A Stpt', nameAr: 'نقطة ضبط مرجع السرعة A', range: '0–500', defaultVal: '0', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 547, nameEn: 'Spd Ref A AnlgHi', nameAr: 'أقصى قيمة تماثلية لمرجع السرعة A', range: '0–500', defaultVal: '60', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 548, nameEn: 'Spd Ref A AnlgLo', nameAr: 'أدنى قيمة تماثلية لمرجع السرعة A', range: '0–500', defaultVal: '0', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 550, nameEn: 'Spd Ref B Sel', nameAr: 'اختيار مرجع السرعة B', range: '0–30', defaultVal: '2', unit: '—', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 551, nameEn: 'Spd Ref B Stpt', nameAr: 'نقطة ضبط مرجع السرعة B', range: '0–500', defaultVal: '0', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 552, nameEn: 'Spd Ref B AnlgHi', nameAr: 'أقصى قيمة تماثلية لمرجع السرعة B', range: '0–500', defaultVal: '60', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 553, nameEn: 'Spd Ref B AnlgLo', nameAr: 'أدنى قيمة تماثلية لمرجع السرعة B', range: '0–500', defaultVal: '0', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 556, nameEn: 'Jog Speed 1', nameAr: 'سرعة الحركة البطيئة 1', range: '0–500', defaultVal: '10', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 557, nameEn: 'Jog Speed 2', nameAr: 'سرعة الحركة البطيئة 2', range: '0–500', defaultVal: '10', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 566, nameEn: 'MOP Init Select', nameAr: 'اختيار القيمة الابتدائية لـ MOP', range: '0–2', defaultVal: '0', unit: '—', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 567, nameEn: 'MOP Init Stpt', nameAr: 'نقطة الضبط الابتدائية لـ MOP', range: '0–500', defaultVal: '0', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 571, nameEn: 'Preset Speed 1', nameAr: 'السرعة المسبقة 1', range: '0–500', defaultVal: '5', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 572, nameEn: 'Preset Speed 2', nameAr: 'السرعة المسبقة 2', range: '0–500', defaultVal: '10', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 573, nameEn: 'Preset Speed 3', nameAr: 'السرعة المسبقة 3', range: '0–500', defaultVal: '20', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 574, nameEn: 'Preset Speed 4', nameAr: 'السرعة المسبقة 4', range: '0–500', defaultVal: '30', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 575, nameEn: 'Preset Speed 5', nameAr: 'السرعة المسبقة 5', range: '0–500', defaultVal: '40', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 576, nameEn: 'Preset Speed 6', nameAr: 'السرعة المسبقة 6', range: '0–500', defaultVal: '50', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },
  { id: 577, nameEn: 'Preset Speed 7', nameAr: 'السرعة المسبقة 7', range: '0–500', defaultVal: '60', unit: 'Hz', rw: 'RW', group: 'speed_control', subGroup: 'Speed Reference' },

  // ==================== 7. FILE: Torque Control ====================
  // Group: Torque Reference
  { id: 675, nameEn: 'Trq Ref A Sel', nameAr: 'اختيار مرجع العزم A', range: '0–20', defaultVal: '0', unit: '—', rw: 'RW', group: 'torque_control', subGroup: 'Torque Reference' },
  { id: 676, nameEn: 'Trq Ref A Stpt', nameAr: 'نقطة ضبط مرجع العزم A', range: '—800–800', defaultVal: '0', unit: '%', rw: 'RW', group: 'torque_control', subGroup: 'Torque Reference' },
  { id: 677, nameEn: 'Trq Ref A AnlgHi', nameAr: 'أقصى قيمة تماثلية لمرجع العزم A', range: '—800–800', defaultVal: '100', unit: '%', rw: 'RW', group: 'torque_control', subGroup: 'Torque Reference' },
  { id: 678, nameEn: 'Trq Ref A AnlgLo', nameAr: 'أدنى قيمة تماثلية لمرجع العزم A', range: '—800–800', defaultVal: '0', unit: '%', rw: 'RW', group: 'torque_control', subGroup: 'Torque Reference' },
  { id: 679, nameEn: 'Trq Ref A Mult', nameAr: 'مضاعف مرجع العزم A', range: '0.00–1.00', defaultVal: '1.00', unit: '—', rw: 'RW', group: 'torque_control', subGroup: 'Torque Reference' },
  { id: 680, nameEn: 'Trq Ref B Sel', nameAr: 'اختيار مرجع العزم B', range: '0–20', defaultVal: '0', unit: '—', rw: 'RW', group: 'torque_control', subGroup: 'Torque Reference' },
  { id: 681, nameEn: 'Trq Ref B Stpt', nameAr: 'نقطة ضبط مرجع العزم B', range: '—800–800', defaultVal: '0', unit: '%', rw: 'RW', group: 'torque_control', subGroup: 'Torque Reference' },
  { id: 682, nameEn: 'Trq Ref B AnlgHi', nameAr: 'أقصى قيمة تماثلية لمرجع العزم B', range: '—800–800', defaultVal: '100', unit: '%', rw: 'RW', group: 'torque_control', subGroup: 'Torque Reference' },
  { id: 683, nameEn: 'Trq Ref B AnlgLo', nameAr: 'أدنى قيمة تماثلية لمرجع العزم B', range: '—800–800', defaultVal: '0', unit: '%', rw: 'RW', group: 'torque_control', subGroup: 'Torque Reference' },
  { id: 684, nameEn: 'Trq Ref B Mult', nameAr: 'مضاعف مرجع العزم B', range: '0.00–1.00', defaultVal: '1.00', unit: '—', rw: 'RW', group: 'torque_control', subGroup: 'Torque Reference' },
  { id: 685, nameEn: 'Selected Trq Ref', nameAr: 'مرجع العزم المختار', range: '—800–800', defaultVal: '—', unit: '%', rw: 'R', group: 'torque_control', subGroup: 'Torque Reference' },

  // ==================== 8. FILE: Communication ====================
  // Group: Comm Control
  { id: 871, nameEn: 'Port 1 Reference', nameAr: 'مرجع البورت 1', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'Comm Control' },

  // Group: DPI Datalinks
  { id: 895, nameEn: 'Data In A1', nameAr: 'بيانات الدخل A1', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 896, nameEn: 'Data In A2', nameAr: 'بيانات الدخل A2', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 897, nameEn: 'Data In B1', nameAr: 'بيانات الدخل B1', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 898, nameEn: 'Data In B2', nameAr: 'بيانات الدخل B2', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 899, nameEn: 'Data In C1', nameAr: 'بيانات الدخل C1', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 900, nameEn: 'Data In C2', nameAr: 'بيانات الدخل C2', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 901, nameEn: 'Data In D1', nameAr: 'بيانات الدخل D1', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 902, nameEn: 'Data In D2', nameAr: 'بيانات الدخل D2', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 905, nameEn: 'Data Out A1', nameAr: 'بيانات الخرج A1', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 906, nameEn: 'Data Out A2', nameAr: 'بيانات الخرج A2', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 907, nameEn: 'Data Out B1', nameAr: 'بيانات الخرج B1', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 908, nameEn: 'Data Out B2', nameAr: 'بيانات الخرج B2', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 909, nameEn: 'Data Out C1', nameAr: 'بيانات الخرج C1', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 910, nameEn: 'Data Out C2', nameAr: 'بيانات الخرج C2', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 911, nameEn: 'Data Out D1', nameAr: 'بيانات الخرج D1', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },
  { id: 912, nameEn: 'Data Out D2', nameAr: 'بيانات الخرج D2', range: '0–65535', defaultVal: '0', unit: '—', rw: 'RW', group: 'communication', subGroup: 'DPI Datalinks' },

  // ==================== 9. FILE: Diagnostics ====================
  // Group: Status
  { id: 930, nameEn: 'Speed Ref Source', nameAr: 'مصدر مرجع السرعة', range: '0–30', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics', subGroup: 'Status' },
  { id: 931, nameEn: 'Last StartSource', nameAr: 'آخر مصدر تشغيل', range: '0–15', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics', subGroup: 'Status' },
  { id: 932, nameEn: 'Last Stop Source', nameAr: 'آخر مصدر إيقاف', range: '0–15', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics', subGroup: 'Status' },
  { id: 933, nameEn: 'Start Inhibits', nameAr: 'موانع التشغيل', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics', subGroup: 'Status' },
  { id: 934, nameEn: 'Last StrtInhibit', nameAr: 'آخر مانع تشغيل', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics', subGroup: 'Status' },
  { id: 935, nameEn: 'Drive Status 1', nameAr: 'حالة الدرايف 1', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics', subGroup: 'Status' },
  { id: 936, nameEn: 'Drive Status 2', nameAr: 'حالة الدرايف 2', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics', subGroup: 'Status' },
  { id: 937, nameEn: 'Condition Sts 1', nameAr: 'حالة الشروط 1', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics', subGroup: 'Status' },

  // Group: Fault/Alarm Info
  { id: 951, nameEn: 'Last Fault Code', nameAr: 'كود آخر عطل', range: '0–65535', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics', subGroup: 'Fault/Alarm Info' },
  { id: 952, nameEn: 'Fault Status A', nameAr: 'حالة الأعطال A', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics', subGroup: 'Fault/Alarm Info' },
  { id: 953, nameEn: 'Fault Status B', nameAr: 'حالة الأعطال B', range: 'Bits', defaultVal: '—', unit: '—', rw: 'R', group: 'diagnostics', subGroup: 'Fault/Alarm Info' },
];

export const faults: FaultCode[] = [
  { code: 'F02', nameEn: 'Auxiliary Input', nameAr: 'دخل مساعد', cause: 'ترمينال إيقاف مفتوح', solution: 'فحص توصيلات الترمينال' },
  { code: 'F03', nameEn: 'Power Loss', nameAr: 'فقد الطاقة', cause: 'انقطاع الطاقة عن الدرايف', solution: 'فحص مصدر الجهد المغذي' },
  { code: 'F04', nameEn: 'UnderVoltage', nameAr: 'جهد ناقص', cause: 'جهد منخفض على DC Bus', solution: 'فحص جهد الشبكة المصدرية' },
  { code: 'F05', nameEn: 'OverVoltage', nameAr: 'جهد زائد', cause: 'تباطؤ سريع أو ارتفاع جهد الشبكة', solution: 'إطالة وقت التباطؤ Decel Time' },
  { code: 'F06', nameEn: 'Motor Stalled', nameAr: 'توقف الموتور / توقف قسري', cause: 'حمل زائد أو إعاقة ميكانيكية', solution: 'فحص حمل المحرك والمجاري الميكانيكية' },
  { code: 'F07', nameEn: 'Motor OvrLoad', nameAr: 'حماية حرارية للموتور', cause: 'حمل زائد لفترة طويلة', solution: 'تقليل الحمل ومراجعة P410-P416' },
  { code: 'F08', nameEn: 'Heatsink OvrTmp', nameAr: 'حرارة مشتت حرارة زائدة', cause: 'انسداد تهوية أو تلف مروحة التبريد', solution: 'تحسين التبريد وتنظيف مروحة الدرايف' },
  { code: 'F12', nameEn: 'HW OverCurrent', nameAr: 'تيار زائد عتادي', cause: 'قصر كهربائي أو صدمة حمل مفاجئة', solution: 'فحص كابلات الموتور والعزل' },
  { code: 'F13', nameEn: 'Ground Fault', nameAr: 'عطل أرضي', cause: 'تسريب أرضي في أسلاك المحرك', solution: 'قياس عزل ملفات المحرك والكابلات' },
  { code: 'F38', nameEn: 'Phase U to Gnd', nameAr: 'عطل الوجه U للأرضي', cause: 'تلف عزل الكابل للوجه U', solution: 'فحص واستبدال كابل الوجه U' },
  { code: 'F63', nameEn: 'SW OverCurrent', nameAr: 'تيار زائد برمجياً', cause: 'تجاوز حد التيار المبرمج P422', solution: 'مراجعة إعدادات حد التيار والتطبيق' },
  { code: 'F81', nameEn: 'Comm Loss', nameAr: 'فقد الاتصال الشبكي', cause: 'انقطاع الاتصال ببورت الشبكة', solution: 'فحص كابلات الشبكة وإعدادات P871' },
];

export const quickReferenceIds = [
  1, 2, 3, 7, 8, 11, 20, 25, 26, 27, 28, 30, 35, 37, 65, 70, 150, 158, 161, 163, 220, 225, 255, 270, 300, 305, 370, 410, 421, 520, 535, 537, 545, 571, 675, 871, 930, 935, 951
];
