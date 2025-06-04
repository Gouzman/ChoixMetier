import React from 'react';
interface TabsProps {
    defaultValue: string;
    className?: string;
    children: React.ReactNode;
}
export declare const Tabs: ({ defaultValue, className, children }: TabsProps) => import("react/jsx-runtime").JSX.Element;
interface TabListProps {
    className?: string;
    children: React.ReactNode;
}
export declare const TabList: ({ className, children }: TabListProps) => import("react/jsx-runtime").JSX.Element;
interface TabTriggerProps {
    value: string;
    className?: string;
    children: React.ReactNode;
}
export declare const TabTrigger: ({ value, className, children }: TabTriggerProps) => import("react/jsx-runtime").JSX.Element;
interface TabContentProps {
    value: string;
    className?: string;
    children: React.ReactNode;
}
export declare const TabContent: ({ value, className, children }: TabContentProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
