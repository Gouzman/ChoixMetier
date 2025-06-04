import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn } from "../../lib/utils";
export const Input = React.forwardRef(({ className, label, error, icon, id, value, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (_jsxs("div", { className: "w-full", children: [label && (_jsx("label", { htmlFor: inputId, className: "block text-sm font-medium text-gray-700 mb-1", children: label })), _jsxs("div", { className: "relative", children: [icon && (_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500", children: icon })), _jsx("input", { id: inputId, ref: ref, value: value ?? "", className: cn("block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm", "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500", "placeholder:text-gray-400 text-gray-900", icon && "pl-10", error && "border-red-500 focus:ring-red-500 focus:border-red-500", className), ...props })] }), error && _jsx("p", { className: "mt-1 text-sm text-red-600", children: error })] }));
});
Input.displayName = "Input";
