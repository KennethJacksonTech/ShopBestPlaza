import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  label: string;
}

export default function CategoryCard({ icon: Icon, label }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-[180px] h-[120px] rounded-xl bg-surface-secondary">
      <Icon size={28} className="text-accent-warm" />
      <span className="text-sm font-semibold text-fg-primary">{label}</span>
    </div>
  );
}
