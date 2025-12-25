import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon: ReactNode;
}

export const StatCard = ({ label, value, change, trend = "neutral", icon }: StatCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 group">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-text-secondary font-medium">{label}</p>
          <p className="text-3xl font-bold text-foreground mt-2 tracking-tight">{value}</p>
          {change && (
            <p className={cn(
              "text-sm mt-2 font-medium flex items-center gap-1",
              trend === "up" && "text-status-success",
              trend === "down" && "text-status-error",
              trend === "neutral" && "text-text-tertiary"
            )}>
              {trend === "up" && (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              )}
              {trend === "down" && (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
              {change}
            </p>
          )}
        </div>
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
          {icon}
        </div>
      </div>
    </div>
  );
};
