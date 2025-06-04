import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { mockFormData } from '../../data/mockData';
export const CommuneDistribution = () => {
    // Calculate commune distribution
    const communeCounts = mockFormData.reduce((acc, form) => {
        const commune = form.participant?.address?.commune;
        if (!commune)
            return acc; // Ajout d'une vérification de sécurité
        acc[commune] = (acc[commune] || 0) + 1;
        return acc;
    }, {});
    // Convert to array and sort by count
    const communeDistribution = Object.entries(communeCounts)
        .map(([label, count]) => ({
        label,
        count,
        percentage: Math.round((count / mockFormData.length) * 100),
    }))
        .sort((a, b) => b.count - a.count);
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "R\u00E9partition g\u00E9ographique" }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: communeDistribution.map((commune) => (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-24 md:w-36 lg:w-48 truncate pr-4", children: _jsx("span", { className: "text-sm font-medium text-gray-700", children: commune.label }) }), _jsx("div", { className: "flex-1", children: _jsx("div", { className: "w-full bg-gray-200 rounded-full h-2.5", children: _jsx("div", { className: "bg-teal-600 h-2.5 rounded-full", style: { width: `${commune.percentage}%` } }) }) }), _jsx("div", { className: "w-12 pl-4 text-right", children: _jsxs("span", { className: "text-sm font-medium text-gray-700", children: [commune.percentage, "%"] }) })] }, commune.label))) }) })] }));
};
