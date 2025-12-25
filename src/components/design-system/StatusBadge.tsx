import { cn } from "../../lib/utils";
import { Check, X } from "lucide-react";

interface StatusBadgeProps {
  status: "stable" | "beta" | "deprecated" | "new";
}

const statusConfig = {
  stable: { label: "Stable", className: "bg-status-success/10 text-status-success border-status-success/20" },
  beta: { label: "Beta", className: "bg-status-warning/10 text-status-warning border-status-warning/20" },
  deprecated: { label: "Deprecated", className: "bg-status-error/10 text-status-error border-status-error/20" },
  new: { label: "New", className: "bg-status-info/10 text-status-info border-status-info/20" },
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const config = statusConfig[status];
  
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border",
      config.className
    )}>
      {config.label}
    </span>
  );
};

interface FeatureBadgeProps {
  supported: boolean;
  label: string;
}

export const FeatureBadge = ({ supported, label }: FeatureBadgeProps) => {
  return (
    <div className="flex items-center gap-3 text-sm group">
      {supported ? (
        <div className="w-6 h-6 rounded-full bg-status-success/10 flex items-center justify-center group-hover:bg-status-success/20 transition-colors">
          <Check size={14} className="text-status-success" />
        </div>
      ) : (
        <div className="w-6 h-6 rounded-full bg-status-error/10 flex items-center justify-center">
          <X size={14} className="text-status-error" />
        </div>
      )}
      <span className="text-text-secondary group-hover:text-foreground transition-colors">{label}</span>
    </div>
  );
};