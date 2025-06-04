import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../lib/utils';
export const Table = React.forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { className: "w-full overflow-auto", children: _jsx("table", { ref: ref, className: cn('w-full caption-bottom text-sm', className), ...props, children: children }) }));
});
Table.displayName = 'Table';
export const TableHeader = React.forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("thead", { ref: ref, className: cn('bg-gray-50 text-gray-700', className), ...props, children: children }));
});
TableHeader.displayName = 'TableHeader';
export const TableBody = React.forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("tbody", { ref: ref, className: cn('divide-y divide-gray-200 bg-white', className), ...props, children: children }));
});
TableBody.displayName = 'TableBody';
export const TableRow = React.forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("tr", { ref: ref, className: cn('hover:bg-gray-50 transition-colors', className), ...props, children: children }));
});
TableRow.displayName = 'TableRow';
export const TableHead = React.forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("th", { ref: ref, className: cn('px-4 py-3 text-left text-xs font-medium uppercase tracking-wider', className), ...props, children: children }));
});
TableHead.displayName = 'TableHead';
export const TableCell = React.forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("td", { ref: ref, className: cn('px-4 py-3 text-sm', className), ...props, children: children }));
});
TableCell.displayName = 'TableCell';
