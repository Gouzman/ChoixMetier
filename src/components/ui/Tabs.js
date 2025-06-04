import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../lib/utils';
const TabsContext = React.createContext(undefined);
export const Tabs = ({ defaultValue, className, children }) => {
    const [value, setValue] = React.useState(defaultValue);
    return (_jsx(TabsContext.Provider, { value: { value, onChange: setValue }, children: _jsx("div", { className: cn('w-full', className), children: children }) }));
};
export const TabList = ({ className, children }) => {
    return (_jsx("div", { className: cn('flex border-b border-gray-200', className), children: children }));
};
export const TabTrigger = ({ value, className, children }) => {
    const context = React.useContext(TabsContext);
    if (!context) {
        throw new Error('TabTrigger must be used within a Tabs component');
    }
    const { value: selectedValue, onChange } = context;
    const isSelected = selectedValue === value;
    return (_jsx("button", { type: "button", role: "tab", "aria-selected": isSelected, className: cn('px-4 py-2 text-sm font-medium transition-colors', 'focus:outline-none', isSelected
            ? 'border-b-2 border-blue-500 text-blue-600'
            : 'text-gray-500 hover:text-gray-700 hover:border-gray-300', className), onClick: () => onChange(value), children: children }));
};
export const TabContent = ({ value, className, children }) => {
    const context = React.useContext(TabsContext);
    if (!context) {
        throw new Error('TabContent must be used within a Tabs component');
    }
    const { value: selectedValue } = context;
    const isSelected = selectedValue === value;
    if (!isSelected)
        return null;
    return (_jsx("div", { role: "tabpanel", className: cn('mt-4', className), children: children }));
};
