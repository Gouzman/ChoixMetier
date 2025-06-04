import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn } from "../../lib/utils";
export const Select = React.forwardRef(({ className, label, error, options, id, ...props }, ref) => {
    const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (_jsxs("div", { className: "w-full", children: [label && (_jsx("label", { htmlFor: selectId, className: "block text-sm font-medium text-gray-700 mb-1", children: label })), _jsxs("select", { id: selectId, ref: ref, className: cn("block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm", "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500", "placeholder:text-gray-400 text-gray-900", error && "border-red-500 focus:ring-red-500 focus:border-red-500", className), ...props, children: [_jsx("option", { value: "", children: "S\u00E9lectionner" }), options.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value)))] }), error && _jsx("p", { className: "mt-1 text-sm text-red-600", children: error })] }));
});
Select.displayName = "Select";
