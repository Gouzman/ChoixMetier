import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../lib/utils';
export const PageContainer = ({ title, description, children, className, }) => {
    return (_jsxs("div", { className: cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", className), children: [(title || description) && (_jsxs("div", { className: "mb-6", children: [title && _jsx("h1", { className: "text-2xl font-bold text-gray-900", children: title }), description && _jsx("p", { className: "mt-1 text-sm text-gray-500", children: description })] })), children] }));
};
