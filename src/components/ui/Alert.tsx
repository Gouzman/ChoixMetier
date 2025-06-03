import React from 'react';
import { cn } from '../../lib/utils';
import { AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export const Alert = ({ 
  variant = 'info', 
  title, 
  className, 
  children 
}: AlertProps) => {
  const variantClasses = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  };

  const iconMap = {
    info: <Info size={20} className="text-blue-500" />,
    success: <CheckCircle size={20} className="text-green-500" />,
    warning: <AlertTriangle size={20} className="text-yellow-500" />,
    error: <AlertCircle size={20} className="text-red-500" />,
  };

  return (
    <div
      className={cn(
        'rounded-md border p-4',
        variantClasses[variant],
        className
      )}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          {iconMap[variant]}
        </div>
        <div className="ml-3">
          {title && (
            <h3 className="text-sm font-medium">{title}</h3>
          )}
          <div className={cn("text-sm", title && "mt-2")}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};