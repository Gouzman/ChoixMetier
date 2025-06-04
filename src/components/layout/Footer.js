import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (_jsx("footer", { className: "bg-gray-50 border-t border-gray-200 py-6", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "md:flex md:items-center md:justify-between", children: [_jsx("div", { className: "text-center md:text-left", children: _jsxs("p", { className: "text-sm text-gray-500", children: ["\u00A9 ", currentYear, " GestionM\u00E9tiers. Tous droits r\u00E9serv\u00E9s."] }) }), _jsx("div", { className: "mt-4 md:mt-0", children: _jsx("p", { className: "text-sm text-gray-500 text-center md:text-right", children: "Version 1.0.0" }) })] }) }) }));
};
