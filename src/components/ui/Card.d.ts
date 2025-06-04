import React from 'react';
interface CardProps {
    className?: string;
    children: React.ReactNode;
}
export declare const Card: ({ className, children }: CardProps) => import("react/jsx-runtime").JSX.Element;
interface CardHeaderProps {
    className?: string;
    children: React.ReactNode;
}
export declare const CardHeader: ({ className, children }: CardHeaderProps) => import("react/jsx-runtime").JSX.Element;
interface CardTitleProps {
    className?: string;
    children: React.ReactNode;
}
export declare const CardTitle: ({ className, children }: CardTitleProps) => import("react/jsx-runtime").JSX.Element;
interface CardContentProps {
    className?: string;
    children: React.ReactNode;
}
export declare const CardContent: ({ className, children }: CardContentProps) => import("react/jsx-runtime").JSX.Element;
interface CardFooterProps {
    className?: string;
    children: React.ReactNode;
}
export declare const CardFooter: ({ className, children }: CardFooterProps) => import("react/jsx-runtime").JSX.Element;
export {};
