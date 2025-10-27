import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  gradient?: boolean;
}

export default function Card({
  children,
  hover = true,
  padding = 'md',
  className,
  gradient = false,
}: CardProps) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  return (
    <div
      className={clsx(
        'rounded-xl border border-secondary-200 bg-white shadow-card',
        hover && 'card-hover',
        gradient && 'bg-gradient-to-br from-primary-50 to-accent-50',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

