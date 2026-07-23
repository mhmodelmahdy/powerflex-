import React, { useState, useMemo, useEffect } from 'react';
import { Search, Hash, SlidersHorizontal, Lock, Edit3, Folder } from 'lucide-react';
import { parameters, parameterGroups, Parameter } from '@/data/parameters';
import { Input } from '@/components/ui/input';

export default function ParametersBrowser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGroup, setActiveGroup] = useState<string>('all');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const groupParam = urlParams.get('group');
    if (groupParam && parameterGroups.some(g => g.id === groupParam)) {
      setActiveGroup(groupParam);
    }
  }, []);

  const filteredParams = useMemo(() => {
    return parameters.filter(p => {
      const matchesSearch = 
        p.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.nameAr.includes(searchTerm) || 
        p.id.toString().includes(searchTerm) ||
        (p.subGroup && p.subGroup.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesGroup = activeGroup === 'all' || p.group === activeGroup;
      
      return matchesSearch && matchesGroup;
    });
  }, [searchTerm, activeGroup]);

  return (
    <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 flex items-center gap-2 sm:gap-3">
          <Search className="w-6 h-6 sm:w-8 sm:h-8 text-primary shrink-0" />
          <span>البحث عن بارامتر (Parameters Browser)</span>
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground">ابحث برقم البارامتر، أو الاسم بالعربي أو الإنجليزي، أو اسم المجموعة الفرعية</p>
      </div>

      {/* Search Input & Group Filters */}
      <div className="bg-card border border-border p-3 sm:p-4 rounded-xl flex flex-col gap-3 sm:gap-4">
        <div className="relative w-full">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground pointer-events-none" />
          <Input 
            placeholder="مثال: 520 أو Max Fwd Speed أو Metering أو سرعة..." 
            className="pl-4 pr-9 sm:pr-10 bg-background border-border h-11 sm:h-12 text-base sm:text-lg focus-visible:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Horizontal Scroll Chips for Groups */}
        <div className="flex gap-2 w-full overflow-x-auto pb-1.5 pt-0.5 scrollbar-hide touch-pan-x -mx-1 px-1">
          <button
            onClick={() => setActiveGroup('all')}
            className={`whitespace-nowrap px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold border transition-colors touch-manipulation shrink-0 ${
              activeGroup === 'all' 
                ? 'bg-primary text-primary-foreground border-primary' 
                : 'bg-background text-muted-foreground border-border hover:border-primary/50'
            }`}
          >
            الكل ({parameters.length})
          </button>
          {parameterGroups.map(g => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold border transition-colors touch-manipulation shrink-0 ${
                activeGroup === g.id 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : 'bg-background text-muted-foreground border-border hover:border-primary/50'
              }`}
            >
              {g.nameAr}
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
        <SlidersHorizontal className="w-4 h-4 text-primary" />
        <span>تم العثور على {filteredParams.length} بارامتر</span>
      </div>

      {/* Parameter Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filteredParams.map((param, index) => (
          <ParameterCard key={`${param.id}-${param.subGroup || index}`} param={param} />
        ))}
        
        {filteredParams.length === 0 && (
          <div className="col-span-full py-10 sm:py-12 flex flex-col items-center justify-center text-muted-foreground bg-card/50 rounded-xl border border-border/50 border-dashed p-4 text-center">
            <Search className="w-10 h-10 sm:w-12 sm:h-12 mb-3 opacity-20" />
            <p className="text-base sm:text-lg font-bold">لم يتم العثور على نتائج</p>
            <p className="text-xs sm:text-sm opacity-60 mt-1">جرب البحث بكلمات أخرى أو أرقام مختلفة</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ParameterCard({ param }: { param: Parameter }) {
  const group = parameterGroups.find(g => g.id === param.group);
  
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors group relative flex flex-col active:scale-[0.99] touch-manipulation">
      <div className={`h-1 w-full ${group?.color.split(' ')[0]} absolute top-0 left-0 right-0`} />
      
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-2.5">
          <div className="flex items-center gap-1.5 bg-background border border-border px-2.5 py-1 rounded-md">
            <Hash className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono font-bold text-base sm:text-lg">{param.id}</span>
          </div>

          <div className={`text-[10px] px-2 py-1 rounded border font-bold ${param.rw === 'R' ? 'bg-secondary text-muted-foreground border-border' : 'bg-primary/10 text-primary border-primary/30'}`}>
            {param.rw === 'R' ? (
              <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Read Only</span>
            ) : (
              <span className="flex items-center gap-1"><Edit3 className="w-3 h-3" /> Read/Write</span>
            )}
          </div>
        </div>

        {param.subGroup && (
          <div className="flex items-center gap-1 text-[11px] text-primary/80 font-mono mb-1.5">
            <Folder className="w-3 h-3 shrink-0" />
            <span className="truncate">{group?.nameEn} &gt; {param.subGroup}</span>
          </div>
        )}

        <div className="mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">{param.nameAr}</h3>
          <h4 className="text-xs sm:text-sm font-mono text-muted-foreground mt-0.5">{param.nameEn}</h4>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 text-xs sm:text-sm bg-background border border-border p-2.5 sm:p-3 rounded-lg">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground uppercase font-mono">Range</span>
            <span className="font-mono text-xs sm:text-sm truncate">{param.range}</span>
          </div>
          <div className="flex flex-col border-r border-border pr-2">
            <span className="text-[10px] text-muted-foreground uppercase font-mono">Default</span>
            <span className="font-mono text-xs sm:text-sm truncate">{param.defaultVal}</span>
          </div>
          {param.unit !== '—' && (
            <div className="col-span-2 border-t border-border pt-1.5 mt-1 flex justify-between items-center">
              <span className="text-[10px] text-muted-foreground uppercase font-mono">Unit</span>
              <span className="font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded text-xs">{param.unit}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}