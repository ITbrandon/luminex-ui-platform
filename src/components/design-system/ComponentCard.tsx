import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

interface ComponentCardProps {
  title: string;
  description: string;
  tag: string;
  children: ReactNode;
  className?: string;
}

export const ComponentCard = ({ title, description, tag, children, className }: ComponentCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-2xl border border-border overflow-hidden transition-all hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 group",
      className
    )}>
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between mb-3">
          <code className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
            {tag}
          </code>
          <span className="text-xs text-text-tertiary bg-secondary px-2 py-1 rounded-md">Web Component</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mt-4">{title}</h3>
        <p className="text-sm text-text-secondary mt-1.5">{description}</p>
      </div>
      
      {/* Preview */}
      <div className="p-6 bg-surface-overlay min-h-[160px] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary)/0.03),_transparent_70%)]" />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
};