import { cn } from "../../lib/utils";
import { 
  LayoutGrid, 
  Box, 
  Square, 
  Table, 
  Bell, 
  Zap,
  Sparkles
} from "lucide-react";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  badge?: string;
  isActive?: boolean;
}

const SidebarLink = ({ href, icon, label, badge, isActive }: SidebarLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group cursor-pointer",
        isActive 
          ? "bg-gradient-primary text-primary-foreground shadow-glow" 
          : "text-text-secondary hover:text-foreground hover:bg-secondary"
      )}
    >
      <span className={cn(
        "transition-all",
        isActive ? "text-primary-foreground" : "text-text-tertiary group-hover:text-primary"
      )}>
        {icon}
      </span>
      <span className="flex-1">{label}</span>
      {badge && (
        <span className={cn(
          "text-xs px-2 py-0.5 rounded-full font-medium",
          isActive 
            ? "bg-primary-foreground/20 text-primary-foreground" 
            : "bg-primary/10 text-primary"
        )}>
          {badge}
        </span>
      )}
    </a>
  );
};

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground">Luminex</h1>
            <p className="text-xs text-text-tertiary">UI Platform</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider px-3 mb-3">
          Overview
        </p>
        <SidebarLink href="#hero" icon={<LayoutGrid size={18} />} label="Dashboard" isActive />
        
        <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider px-3 mb-3 mt-6">
          Components
        </p>
        <SidebarLink href="#components" icon={<Square size={18} />} label="ui-button" badge="4" />
        <SidebarLink href="#components" icon={<Box size={18} />} label="ui-modal" badge="2" />
        <SidebarLink href="#components" icon={<Table size={18} />} label="ui-data-table" badge="3" />
        <SidebarLink href="#components" icon={<Bell size={18} />} label="ui-toast" badge="5" />
        
        <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider px-3 mb-3 mt-6">
          Features
        </p>
        <SidebarLink href="#features" icon={<Sparkles size={18} />} label="Enterprise Features" />
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="px-3 py-3 rounded-lg bg-gradient-hero">
          <p className="text-xs font-medium text-foreground">Luminex UI</p>
          <p className="text-xs text-text-tertiary mt-0.5">Version 1.0.1</p>
        </div>
      </div>
    </aside>
  );
};