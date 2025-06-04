import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useFormStore } from '../../store/formStore';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/Table';
import { Button } from '../ui/Button';
import { formatDate } from '../../lib/utils';
import { Eye, Edit, FileText } from 'lucide-react';
export const SearchResults = () => {
    const { searchResults, isLoading } = useFormStore();
    if (isLoading) {
        return (_jsx("div", { className: "flex justify-center py-8", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) }));
    }
    if (searchResults.length === 0) {
        return (_jsxs("div", { className: "text-center py-8 bg-white rounded-lg border border-gray-200", children: [_jsx(FileText, { className: "mx-auto h-12 w-12 text-gray-400" }), _jsx("h3", { className: "mt-2 text-sm font-medium text-gray-900", children: "Aucun r\u00E9sultat" }), _jsx("p", { className: "mt-1 text-sm text-gray-500", children: "Aucun formulaire ne correspond \u00E0 votre recherche." })] }));
    }
    return (_jsxs("div", { className: "bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden", children: [_jsx("div", { className: "p-4 border-b border-gray-200 bg-gray-50", children: _jsxs("h3", { className: "text-lg font-medium text-gray-900", children: ["R\u00E9sultats (", searchResults.length, ")"] }) }), _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "ID" }), _jsx(TableHead, { children: "Nom & Pr\u00E9nom" }), _jsx(TableHead, { children: "Commune" }), _jsx(TableHead, { children: "M\u00E9tier souhait\u00E9" }), _jsx(TableHead, { children: "Date d'ajout" }), _jsx(TableHead, { className: "text-right", children: "Actions" })] }) }), _jsx(TableBody, { children: searchResults.map((form) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: form.participant.id }), _jsxs(TableCell, { className: "font-medium", children: [form.participant.lastName, " ", form.participant.firstName] }), _jsx(TableCell, { children: form.participant?.address?.commune ?? 'N/A' }), _jsx(TableCell, { children: form.professionalBackground.desiredJob }), _jsx(TableCell, { children: form.participant?.createdAt ? formatDate(form.participant.createdAt) : 'N/A' }), _jsx(TableCell, { className: "text-right", children: _jsxs("div", { className: "flex justify-end space-x-2", children: [_jsx(Link, { to: `/forms/${form.participant.id}`, children: _jsx(Button, { variant: "ghost", size: "sm", icon: _jsx(Eye, { size: 16 }), children: "Voir" }) }), _jsx(Link, { to: `/forms/${form.participant.id}/edit`, children: _jsx(Button, { variant: "outline", size: "sm", icon: _jsx(Edit, { size: 16 }), children: "Modifier" }) })] }) })] }, form.participant.id))) })] })] }));
};
