import React from 'react';
import { cn } from '../../lib/utils';

interface PageContainerProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  title,
  description,
  children,
  className,
}) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", className)}>
      {(title || description) && (
        <div className="mb-6">
          {title && <h1 className="text-2xl font-bold text-gray-900">{title}</h1>}
          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
};