import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    return (_jsx("header", { className: "bg-white shadow-sm border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between h-16 items-center", children: [_jsx("div", { className: "flex items-center", children: _jsxs(Link, { to: "/", className: "flex items-center", children: [_jsx("div", { className: "bg-blue-600 text-white p-2 rounded-md", children: _jsx(User, { size: 20 }) }), _jsx("span", { className: "ml-2 text-xl font-bold text-gray-900", children: "GestionM\u00E9tiers" })] }) }), _jsx("div", { className: "flex items-center space-x-4", children: _jsx("button", { onClick: toggleTheme, className: "p-2 rounded-md bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200", children: theme === "light" ? "Mode Sombre" : "Mode Clair" }) })] }) }) }));
};
