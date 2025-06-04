import React from 'react';
interface AlertProps {
    variant?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    className?: string;
    children: React.ReactNode;
}
export declare const Alert: ({ variant, title, className, children }: AlertProps) => import("react/jsx-runtime").JSX.Element;
export {};
