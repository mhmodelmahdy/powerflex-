import React from 'react';
import { Link, useLocation } from 'wouter';
import { Settings, Server, BookOpen, Key, AlertTriangle, Menu, X, TerminalSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const navItems = [
    { href: '/', labelAr: 'لوحة التحكم', labelEn: 'Dashboard', icon: TerminalSquare },
    { href: '/parameters', labelAr: 'البحث عن بارامتر', labelEn: 'Parameters Browser', icon: Settings },
    { href: '/groups', labelAr: 'مجموعات البارامترات', labelEn: 'Parameter Groups', icon: Server },
    { href: '/him-guide', labelAr: 'دليل استخدام HIM', labelEn: 'HIM Guide', icon: Key },
    { href: '/quick-ref', labelAr: 'مرجع سريع وأعطال', labelEn: 'Quick Reference', icon: AlertTriangle },
  ];

  return (
    <div className="flex h-[100dvh] w-full bg-background overflow-hidden selection:bg-primary/30">
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-sidebar border-b border-sidebar-border z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center border border-primary/30">
            <Settings className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="font-bold text-sm tracking-wide text-foreground">PowerFlex 753</div>
            <div className="text-[10px] text-muted-foreground font-mono">20F...C072</div>
          </div>
        </div>
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 text-foreground bg-sidebar-accent rounded-md hover:bg-sidebar-accent/80 transition-colors"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={cn(
        "fixed md:static inset-y-0 right-0 w-64 bg-sidebar border-l border-sidebar-border flex flex-col z-40 transform transition-transform duration-300 ease-in-out md:translate-x-0",
        isMobileOpen ? "translate-x-0 mt-16 md:mt-0" : "translate-x-full"
      )}>
        <div className="hidden md:flex p-6 border-b border-sidebar-border items-center gap-4 bg-sidebar/50">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/50 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
            <Settings className="w-7 h-7 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wide text-foreground">PowerFlex 753</span>
            <span className="text-xs text-primary font-mono tracking-wider">GUIDE SYSTEM</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 px-2">
            القائمة الرئيسية
          </div>
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href} onClick={() => setIsMobileOpen(false)}>
                <div className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg transition-all cursor-pointer group relative overflow-hidden",
                  isActive 
                    ? "bg-primary/10 text-primary border border-primary/30" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground border border-transparent"
                )}>
                  {isActive && (
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary rounded-l-full shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
                  )}
                  <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">{item.labelAr}</span>
                    <span className="text-[10px] text-muted-foreground font-mono opacity-80">{item.labelEn}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-sidebar-border">
          <div className="bg-card/50 border border-border rounded-lg p-3 flex flex-col gap-1">
            <div className="text-xs text-muted-foreground uppercase">Drive Status</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              <span className="text-sm font-bold text-success">RUNNING</span>
            </div>
            <div className="text-[10px] font-mono text-muted-foreground mt-1">IP: 192.168.1.50</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-[100dvh] overflow-hidden pt-16 md:pt-0 bg-background relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="flex-1 overflow-y-auto p-4 md:p-8 z-10">
          <div className="max-w-6xl mx-auto w-full">
            {children}
          </div>
        </div>
      </main>

      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </div>
  );
}
