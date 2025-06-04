import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "../ui/Table";
import { Badge } from "../ui/Badge";
import { formatDate } from "../../lib/utils";
import { mockFormData } from "../../data/mockData";
export const RecentActivity = () => {
    const recentForms = [...mockFormData]
        .filter((form) => form.participant.createdAt !== undefined)
        .sort((a, b) => (b.participant.createdAt?.getTime() ?? 0) -
        (a.participant.createdAt?.getTime() ?? 0))
        .slice(0, 5);
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Activit\u00E9 r\u00E9cente" }) }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "ID" }), _jsx(TableHead, { children: "Nom" }), _jsx(TableHead, { children: "M\u00E9tier" }), _jsx(TableHead, { children: "Date" }), _jsx(TableHead, { children: "Statut" })] }) }), _jsx(TableBody, { children: recentForms.map((form) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: form.participant.id }), _jsxs(TableCell, { className: "font-medium", children: [form.participant.lastName, " ", form.participant.firstName] }), _jsx(TableCell, { children: form.professionalBackground.desiredJob }), _jsx(TableCell, { children: formatDate(form.participant.createdAt ?? new Date()) }), _jsx(TableCell, { children: _jsx(Badge, { variant: "primary", children: "Inscrit" }) })] }, form.participant.id))) })] }) })] }));
};
