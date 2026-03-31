interface HeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  height?: string;
  children?: React.ReactNode;
}

export default function Hero({
  tag,
  title,
  subtitle,
  height = "200px",
  children,
}: HeroProps) {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-6"
      style={{
        minHeight: height,
        background: "linear-gradient(to bottom, #2C2416, #4A3D2A)",
      }}
    >
      {tag && (
        <p className="text-accent-primary text-[11px] font-semibold uppercase tracking-[2px] mb-3">
          {tag}
        </p>
      )}
      <h1 className="text-fg-inverse font-extrabold text-[40px] leading-tight max-w-3xl">
        {title}
      </h1>
      {subtitle && (
        <p className="text-fg-inverse-muted mt-3 max-w-2xl text-base">
          {subtitle}
        </p>
      )}
      {children}
    </section>
  );
}
