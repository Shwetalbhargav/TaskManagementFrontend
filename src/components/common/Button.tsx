
import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className,
}) => {
  const base = 'rounded-full px-6 py-3 font-medium transition';
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'border border-gray-300 hover:bg-gray-100',
  };

  return (
    <button onClick={onClick} className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
};
