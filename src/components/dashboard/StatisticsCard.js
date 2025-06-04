import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { cn } from '../../lib/utils';
export const StatisticsCard = ({ title, value, description, icon, trend, className, }) => {
    return (_jsxs(Card, { className: cn("overflow-hidden", className), children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: title }), icon && _jsx("div", { className: "text-gray-500", children: icon })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: value }), description && (_jsx("p", { className: "text-xs text-gray-500 mt-1", children: description })), trend && (_jsxs("div", { className: "flex items-center mt-2", children: [_jsxs("span", { className: cn("text-xs font-medium", trend.isPositive ? "text-green-600" : "text-red-600"), children: [trend.isPositive ? "+" : "-", trend.value, "%"] }), _jsx("span", { className: "text-xs text-gray-500 ml-1", children: "vs p\u00E9riode pr\u00E9c\u00E9dente" })] }))] })] }));
};
