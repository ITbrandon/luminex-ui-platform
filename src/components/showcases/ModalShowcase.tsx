import { useState } from "react";
import { Button } from "../../components/ui/button";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

export const ModalShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      {/* Modal Overlay */}
      <div className={cn(
        "fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 transition-opacity duration-200",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )} onClick={() => setIsOpen(false)} />
      
      {/* Modal */}
      <div className={cn(
        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md",
        "bg-card rounded-xl border border-border shadow-lg",
        "transition-all duration-200",
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}>
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Modal Title</h3>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-text-tertiary hover:text-foreground transition-base"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-text-secondary">
            This is an example modal dialog. It can contain any content you need.
          </p>
        </div>
        <div className="flex justify-end gap-3 p-6 border-t border-border bg-surface-overlay rounded-b-xl">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={() => setIsOpen(false)}>Confirm</Button>
        </div>
      </div>
    </div>
  );
};