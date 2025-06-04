import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../lib/utils';
export const Button = React.forwardRef(({ className, children, variant = 'primary', size = 'md', isLoading = false, icon, disabled, type = 'button', ...props }, ref) => {
    const variantClasses = {
        primary: 'bg-blue-700 hover:bg-blue-800 text-white',
        secondary: 'bg-teal-600 hover:bg-teal-700 text-white',
        outline: 'border border-gray-300 hover:bg-gray-100 text-gray-700',
        ghost: 'hover:bg-gray-100 text-gray-700',
        link: 'text-blue-600 hover:underline',
        danger: 'bg-red-600 hover:bg-red-700 text-white',
    };
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg',
    };
    return (_jsxs("button", { ref: ref, type: type, className: cn('font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 inline-flex items-center justify-center', variantClasses[variant], sizeClasses[size], (disabled || isLoading) && 'opacity-60 cursor-not-allowed', className), disabled: disabled || isLoading, ...props, children: [isLoading && (_jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] })), icon && !isLoading && _jsx("span", { className: "mr-2", children: icon }), children] }));
});
Button.displayName = 'Button';
