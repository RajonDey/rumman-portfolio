interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  gradient?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  gradient = false,
}: SectionTitleProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-12 ${alignClasses[align]}`}>
      {subtitle && (
        <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2
        className={`text-heading-2 ${
          gradient
            ? "bg-gradient-primary bg-clip-text text-transparent"
            : "text-secondary-900"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
