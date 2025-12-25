import { useState } from "react";
import { Button } from "../../components/ui/button";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "../../lib/utils";

interface Toast {
  id: number;
  type: "success" | "error" | "info" | "warning";
  message: string;
}

const toastConfig = {
  success: { icon: CheckCircle, className: "border-status-success bg-status-success/10" },
  error: { icon: AlertCircle, className: "border-status-error bg-status-error/10" },
  info: { icon: Info, className: "border-status-info bg-status-info/10" },
  warning: { icon: AlertTriangle, className: "border-status-warning bg-status-warning/10" },
};

export const ToastShowcase = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  
  const addToast = (type: Toast["type"]) => {
    const messages = {
      success: "Operation completed successfully!",
      error: "Something went wrong. Please try again.",
      info: "Here's some helpful information.",
      warning: "Please review before continuing.",
    };
    
    const newToast = { id: Date.now(), type, message: messages[type] };
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== newToast.id));
    }, 3000);
  };
  
  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="success" onClick={() => addToast("success")}>Success</Button>
        <Button size="sm" variant="danger" onClick={() => addToast("error")}>Error</Button>
        <Button size="sm" variant="outline" onClick={() => addToast("info")}>Info</Button>
        <Button size="sm" variant="secondary" onClick={() => addToast("warning")}>Warning</Button>
      </div>
      
      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 z-50 space-y-2 max-w-sm">
        {toasts.map((toast) => {
          const config = toastConfig[toast.type];
          const Icon = config.icon;
          
          return (
            <div 
              key={toast.id}
              className={cn(
                "flex items-start gap-3 p-4 rounded-lg border shadow-lg bg-card animate-fade-in",
                config.className
              )}
            >
              <Icon size={18} className="mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground flex-1">{toast.message}</p>
              <button 
                onClick={() => removeToast(toast.id)}
                className="text-text-tertiary hover:text-foreground transition-base"
              >
                <X size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};