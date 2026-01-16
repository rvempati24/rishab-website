interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  number?: string;
}

export default function SectionHeading({ title, subtitle, number }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-2">
        {number && (
          <span className="font-mono text-cyan-500 text-lg">{number}.</span>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-slate-100">
          {title}
        </h2>
        <div className="h-px bg-slate-800 flex-grow max-w-[200px] ml-4" />
      </div>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl ml-8 sm:ml-[calc(2rem+12px)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
