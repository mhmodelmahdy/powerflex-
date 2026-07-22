import React, { useState, useMemo } from 'react';
import { Search, Filter, Hash, SlidersHorizontal, Lock, Edit3 } from 'lucide-react';
import { parameters, parameterGroups, Parameter } from '@/data/parameters';
import { Input } from '@/components/ui/input';

export default function ParametersBrowser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGroup, setActiveGroup] = useState<string>('all');

  const filteredParams = useMemo(() => {
    return parameters.filter(p => {
      const matchesSearch = 
        p.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.nameAr.includes(searchTerm) || 
        p.id.toString().includes(searchTerm);
      
      const matchesGroup = activeGroup === 'all' || p.group === activeGroup;
      
      return matchesSearch && matchesGroup;
    });
  }, [searchTerm, activeGroup]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
          <Search className="w-8 h-8 text-primary" />
          البحث عن بارامتر
        </h1>
        <p className="text-muted-foreground">ابحث برقم البارامتر، أو الاسم بالعربي أو الإنجليزي</p>
      </div>

      <div className="bg-card border border-border p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="مثال: 90 أو Speed أو مرجع..." 
            className="pl-4 pr-10 bg-background border-border h-12 text-lg focus-visible:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <button
            onClick={() => setActiveGroup('all')}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${
              activeGroup === 'all' 
                ? 'bg-primary text-primary-foreground border-primary' 
                : 'bg-background text-muted-foreground border-border hover:border-primary/50'
            }`}
          >
            الكل
          </button>
          {parameterGroups.map(g => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${
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

      <div className="text-sm text-muted-foreground flex items-center gap-2">
        <SlidersHorizontal className="w-4 h-4" />
        <span>تم العثور على {filteredParams.length} بارامتر</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredParams.map(param => (
          <ParameterCard key={param.id} param={param} />
        ))}
        
        {filteredParams.length === 0 && (
          <div className="col-span-full py-12 flex flex-col items-center justify-center text-muted-foreground bg-card/50 rounded-xl border border-border/50 border-dashed">
            <Search className="w-12 h-12 mb-4 opacity-20" />
            <p className="text-lg">لم يتم العثور على نتائج</p>
            <p className="text-sm opacity-60">جرب البحث بكلمات أخرى أو أرقام مختلفة</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ParameterCard({ param }: { param: Parameter }) {
  const group = parameterGroups.find(g => g.id === param.group);
  
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors group relative flex flex-col">
      <div className={`h-1 w-full ${group?.color.split(' ')[0]} absolute top-0 left-0 right-0`} />
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2 bg-background border border-border px-3 py-1 rounded-md">
            <Hash className="w-4 h-4 text-primary" />
            <span className="font-mono font-bold text-lg">{param.id}</span>
          </div>
          
          <div className={`text-[10px] px-2 py-1 rounded border font-bold ${param.rw === 'R' ? 'bg-secondary text-muted-foreground border-border' : 'bg-primary/10 text-primary border-primary/30'}`}>
            {param.rw === 'R' ? (
              <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Read Only</span>
            ) : (
              <span className="flex items-center gap-1"><Edit3 className="w-3 h-3" /> Read/Write</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground">{param.nameAr}</h3>
          <h4 className="text-sm font-mono text-muted-foreground mt-1">{param.nameEn}</h4>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 text-sm bg-background border border-border p-3 rounded-lg">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground uppercase">Range</span>
            <span className="font-mono">{param.range}</span>
          </div>
          <div className="flex flex-col border-r border-border pr-2">
            <span className="text-[10px] text-muted-foreground uppercase">Default</span>
            <span className="font-mono">{param.defaultVal}</span>
          </div>
          {param.unit !== '—' && (
            <div className="col-span-2 border-t border-border pt-2 mt-1 flex justify-between items-center">
              <span className="text-[10px] text-muted-foreground uppercase">Unit</span>
              <span className="font-mono font-bold text-primary bg-primary/10 px-2 rounded">{param.unit}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}