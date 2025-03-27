
import React from 'react';
import { cn } from '@/lib/utils';

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false, 
    leftIcon, 
    rightIcon,
    fullWidth = false,
    children, 
    disabled, 
    ...props 
  }, ref) => {
    // Map of variant styles
    const variantStyles = {
      primary: 'bg-accent text-white hover:opacity-90 border-transparent',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'border border-input bg-background hover:bg-secondary',
      ghost: 'hover:bg-secondary',
      link: 'text-primary underline-offset-4 hover:underline p-0 h-auto',
    };

    // Map of size styles
    const sizeStyles = {
      sm: 'h-9 px-3 text-xs rounded-md',
      md: 'h-11 px-5 py-2 rounded-lg',
      lg: 'h-14 px-8 py-4 rounded-xl text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'relative flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-transparent border-current opacity-80"></div>
          </div>
        )}
        
        <span className={cn(
          "flex items-center gap-2", 
          isLoading && "opacity-0"
        )}>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </span>
      </button>
    );
  }
);

AppButton.displayName = "AppButton";

export default AppButton;
