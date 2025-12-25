import { Button } from "../../components/ui/button";

export const ButtonShowcase = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Button variant="enterprise">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="accent">Accent</Button>
    </div>
  );
};

export const ButtonVariantsShowcase = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-text-secondary mb-3">Variants</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="enterprise">Enterprise</Button>
          <Button variant="accent">Accent</Button>
        </div>
      </div>
      <div>
        <p className="text-sm text-text-secondary mb-3">Sizes</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>
      <div>
        <p className="text-sm text-text-secondary mb-3">States</p>
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>
    </div>
  );
};