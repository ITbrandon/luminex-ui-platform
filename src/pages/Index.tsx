import { Sidebar } from "../components/layout/Sidebar";
import { ComponentCard } from "../components/design-system/ComponentCard";
import { StatCard } from "../components/design-system/StatCard";
import { CodeBlock } from "../components/design-system/CodeBlock";
import { FeatureBadge } from "../components/design-system/StatusBadge";
import { ButtonShowcase } from "../components/showcases/ButtonShowcase";
import { ModalShowcase } from "../components/showcases/ModalShowcase";
import { TableShowcase } from "../components/showcases/TableShowcase";
import { ToastShowcase } from "../components/showcases/ToastShowcase";
import { Box, Layers, Code2, Users, ArrowRight, Zap, Sparkles, Shield } from "lucide-react";
import { Button } from "../components/ui/button";

const installCode = `npm install @luminex/ui-platform`;

const usageCode = `import '@luminex/ui-platform';

function App() {
  return <ui-button variant="primary">Submit</ui-button>;
}`;

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden border-b border-border">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          
          <div className="relative px-8 py-20 lg:py-28">
            <div className="max-w-4xl animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Version 1.0.1 — Enterprise Ready</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                <span className="text-gradient">Luminex</span>
                <span className="block mt-2">UI Platform</span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed">
                A modern, framework-agnostic UI component library built with Web Components and Lit.js. 
                Designed for enterprise React applications with vibrant, polished aesthetics.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="enterprise"
                  size="lg"
                  className="border-border hover:bg-secondary"
                >
              <a href="https://github.com/ITbrandon/luminex-ui-platform" target="_blank">
             <Code2 size={18} />
              View Documentation
              </a>
            </Button>

              </div>
            </div>
          </div>
        </section>
        
        {/* Stats */}
        <section className="px-8 py-10 border-b border-border bg-surface-overlay">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              label="Components" 
              value="14" 
              change="+3 this quarter"
              trend="up"
              icon={<Box size={24} />}
            />
            <StatCard 
              label="Design Tokens" 
              value="86" 
              change="Fully documented"
              trend="neutral"
              icon={<Layers size={24} />}
            />
            <StatCard 
              label="Weekly Downloads" 
              value="31.5k" 
              change="+12% from last week"
              trend="up"
              icon={<Zap size={24} />}
            />
            <StatCard 
              label="Contributors" 
              value="24" 
              change="+4 this month"
              trend="up"
              icon={<Users size={24} />}
            />
          </div>
        </section>
        
        {/* Quick Start */}
        <section className="px-8 py-14 border-b border-border">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-accent" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Quick Start</h2>
            </div>
            <p className="text-text-secondary mb-8 ml-11">Get up and running in minutes with our design system.</p>
            
            <div className="grid gap-6 lg:grid-cols-2 ml-11">
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground">Installation</h3>
                <CodeBlock code={installCode} language="bash" />
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground">Usage</h3>
                <CodeBlock code={usageCode} language="tsx" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Components Grid */}
        <section id="components" className="px-8 py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Layers className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Core Components</h2>
          </div>
          <p className="text-text-secondary mb-10 ml-11">Standards-compliant Web Components for enterprise applications.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
            <ComponentCard
              title="Button"
              description="Interactive button component with multiple variants and sizes."
              tag="<ui-button>"
            >
              <ButtonShowcase />
            </ComponentCard>
            
            <ComponentCard
              title="Modal Dialog"
              description="Accessible modal overlay for dialogs, alerts, and confirmations."
              tag="<ui-modal>"
            >
              <ModalShowcase />
            </ComponentCard>
            
            <ComponentCard
              title="Data Table"
              description="Feature-rich table component with sorting, filtering, and pagination."
              tag="<ui-data-table>"
            >
              <TableShowcase />
            </ComponentCard>
            
            <ComponentCard
              title="Notification Toast"
              description="Non-blocking notification component for feedback and alerts."
              tag="<ui-toast>"
            >
              <ToastShowcase />
            </ComponentCard>
          </div>
          
          {/* Features Section */}
          <div id="features" className="bg-card rounded-2xl border border-border p-8 mb-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow-accent">
                  <Shield className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Enterprise-Grade Features</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <FeatureBadge supported={true} label="Framework Agnostic" />
                  <FeatureBadge supported={true} label="TypeScript Support" />
                  <FeatureBadge supported={true} label="WCAG 2.1 Compliant" />
                </div>
                <div className="space-y-4">
                  <FeatureBadge supported={true} label="Keyboard Navigation" />
                  <FeatureBadge supported={true} label="Screen Reader Support" />
                  <FeatureBadge supported={true} label="RTL Support" />
                </div>
                <div className="space-y-4">
                  <FeatureBadge supported={true} label="Tree Shakeable" />
                  <FeatureBadge supported={true} label="CSS Custom Properties" />
                  <FeatureBadge supported={true} label="SSR Compatible" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <footer className="text-center py-10 border-t border-border">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Luminex UI Platform</span>
            </div>
            <p className="text-sm text-text-tertiary">
              Internal Use Only • Version 1.0.1
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default Index;