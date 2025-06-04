import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../lib/utils';
import { AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';
export const Alert = ({ variant = 'info', title, className, children }) => {
    const variantClasses = {
        info: 'bg-blue-50 border-blue-200 text-blue-800',
        success: 'bg-green-50 border-green-200 text-green-800',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
        error: 'bg-red-50 border-red-200 text-red-800',
    };
    const iconMap = {
        info: _jsx(Info, { size: 20, className: "text-blue-500" }),
        success: _jsx(CheckCircle, { size: 20, className: "text-green-500" }),
        warning: _jsx(AlertTriangle, { size: 20, className: "text-yellow-500" }),
        error: _jsx(AlertCircle, { size: 20, className: "text-red-500" }),
    };
    return (_jsx("div", { className: cn('rounded-md border p-4', variantClasses[variant], className), children: _jsxs("div", { className: "flex", children: [_jsx("div", { className: "flex-shrink-0", children: iconMap[variant] }), _jsxs("div", { className: "ml-3", children: [title && (_jsx("h3", { className: "text-sm font-medium", children: title })), _jsx("div", { className: cn("text-sm", title && "mt-2"), children: children })] })] }) }));
};
