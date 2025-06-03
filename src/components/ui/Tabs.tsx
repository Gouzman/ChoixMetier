import React from 'react';
import { cn } from '../../lib/utils';

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

interface TabsContextType {
  value: string;
  onChange: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

export const Tabs = ({ defaultValue, className, children }: TabsProps) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, onChange: setValue }}>
      <div className={cn('w-full', className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

interface TabListProps {
  className?: string;
  children: React.ReactNode;
}

export const TabList = ({ className, children }: TabListProps) => {
  return (
    <div className={cn('flex border-b border-gray-200', className)}>
      {children}
    </div>
  );
};

interface TabTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export const TabTrigger = ({ value, className, children }: TabTriggerProps) => {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error('TabTrigger must be used within a Tabs component');
  }

  const { value: selectedValue, onChange } = context;
  const isSelected = selectedValue === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      className={cn(
        'px-4 py-2 text-sm font-medium transition-colors',
        'focus:outline-none',
        isSelected 
          ? 'border-b-2 border-blue-500 text-blue-600' 
          : 'text-gray-500 hover:text-gray-700 hover:border-gray-300',
        className
      )}
      onClick={() => onChange(value)}
    >
      {children}
    </button>
  );
};

interface TabContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export const TabContent = ({ value, className, children }: TabContentProps) => {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error('TabContent must be used within a Tabs component');
  }

  const { value: selectedValue } = context;
  const isSelected = selectedValue === value;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      className={cn('mt-4', className)}
    >
      {children}
    </div>
  );
};