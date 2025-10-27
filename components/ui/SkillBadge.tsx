import clsx from 'clsx';

interface SkillBadgeProps {
  name: string;
  variant?: 'default' | 'tech' | 'business' | 'soft';
  size?: 'sm' | 'md';
}

export default function SkillBadge({
  name,
  variant = 'default',
  size = 'md',
}: SkillBadgeProps) {
  const variants = {
    default: 'bg-primary-100 text-primary-700',
    tech: 'bg-purple-100 text-purple-700',
    business: 'bg-accent-100 text-accent-700',
    soft: 'bg-orange-100 text-orange-700',
  };
  
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
  };
  
  return (
    <span className={clsx(
      'inline-flex items-center rounded-full font-medium',
      variants[variant],
      sizes[size]
    )}>
      {name}
    </span>
  );
}

