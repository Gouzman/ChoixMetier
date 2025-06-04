import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../lib/utils';
export const Card = ({ className, children }) => {
    return (_jsx("div", { className: cn('bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden', className), children: children }));
};
export const CardHeader = ({ className, children }) => {
    return (_jsx("div", { className: cn('px-6 py-4 border-b border-gray-200 bg-gray-50', className), children: children }));
};
export const CardTitle = ({ className, children }) => {
    return (_jsx("h3", { className: cn('text-lg font-semibold text-gray-900', className), children: children }));
};
export const CardContent = ({ className, children }) => {
    return (_jsx("div", { className: cn('px-6 py-4', className), children: children }));
};
export const CardFooter = ({ className, children }) => {
    return (_jsx("div", { className: cn('px-6 py-4 border-t border-gray-200 bg-gray-50', className), children: children }));
};
