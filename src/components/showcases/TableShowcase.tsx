import { cn } from "../../lib/utils";

const data = [
  { id: 1, name: "Button", status: "Stable", version: "1.0.0", downloads: "12.4k" },
  { id: 2, name: "Modal", status: "Stable", version: "1.0.0", downloads: "8.2k" },
  { id: 3, name: "Data Table", status: "Beta", version: "1.0.0", downloads: "6.1k" },
  { id: 4, name: "Toast", status: "New", version: "1.0.0", downloads: "4.8k" },
];

const statusColors: Record<string, string> = {
  Stable: "bg-status-success/10 text-status-success",
  Beta: "bg-status-warning/10 text-status-warning",
  New: "bg-status-info/10 text-status-info",
};

export const TableShowcase = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface-overlay border-b border-border">
            <th className="text-left px-4 py-3 font-medium text-text-secondary">Component</th>
            <th className="text-left px-4 py-3 font-medium text-text-secondary">Status</th>
            <th className="text-left px-4 py-3 font-medium text-text-secondary">Version</th>
            <th className="text-right px-4 py-3 font-medium text-text-secondary">Downloads</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr 
              key={row.id} 
              className={cn(
                "border-b border-border last:border-0 hover:bg-surface-overlay transition-base",
                index % 2 === 0 ? "bg-card" : "bg-background"
              )}
            >
              <td className="px-4 py-3 font-medium text-foreground">{row.name}</td>
              <td className="px-4 py-3">
                <span className={cn("px-2 py-0.5 rounded text-xs font-medium", statusColors[row.status])}>
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-3 text-text-secondary font-mono">{row.version}</td>
              <td className="px-4 py-3 text-right text-text-secondary">{row.downloads}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};