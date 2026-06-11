interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  number?: string;
}

export default function SectionHeading({ title, subtitle, number }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-3 mb-2">
        {number && (
          <span className="text-sm text-muted tabular-nums">{number}</span>
        )}
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-muted max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
