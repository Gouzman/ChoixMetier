import React from 'react';
interface BadgeProps {
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    className?: string;
    children: React.ReactNode;
}
export declare const Badge: ({ variant, className, children }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
