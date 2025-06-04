import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "../ui/Input";
import { Card, CardContent } from "../ui/Card";
import { Select } from "../ui/Select";
export const FormSchoolReturn = ({ data, onChange, isViewMode, }) => {
    return (_jsx(Card, { children: _jsx(CardContent, { className: "pt-6", children: _jsxs("div", { className: "space-y-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "SECTION : CAS DE RETOUR \u00C0 L'\u00C9COLE" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(Input, { label: "Depuis quand as-tu arr\u00EAt\u00E9 ?", name: "schoolStopDate", placeholder: "Entrez la date", value: data.schoolStopDate ?? "", onChange: (e) => onChange({ ...data, schoolStopDate: e.target.value }), disabled: isViewMode }), _jsx(Select, { label: "Derni\u00E8re Classe", name: "lastClass", options: [
                                    { value: "CP1", label: "CP1" },
                                    { value: "CP2", label: "CP2" },
                                    { value: "CE1", label: "CE1" },
                                    { value: "CE2", label: "CE2" },
                                    { value: "CM1", label: "CM1" },
                                    { value: "CM2", label: "CM2" },
                                    { value: "6ème", label: "6ème" },
                                    { value: "5ème", label: "5ème" },
                                    { value: "4ème", label: "4ème" },
                                    { value: "3ème", label: "3ème" },
                                    { value: "Seconde", label: "Seconde" },
                                    { value: "Première", label: "Première" },
                                    { value: "Terminale", label: "Terminale" },
                                    { value: "BTS", label: "BTS Première annee" },
                                    { value: "BTS", label: "BTS Deuxieme annee" },
                                    { value: "Licence", label: "Licence" },
                                ], value: data.lastClass ?? "", onChange: (e) => onChange({ ...data, lastClass: e.target.value }), disabled: isViewMode }), _jsx(Input, { label: "Veux-tu reprendre \u00E0 partir de quelle Classe ?", name: "desiredClass", placeholder: "Ex: CM2, 3\u00E8me", value: data.desiredClass ?? "", onChange: (e) => onChange({ ...data, desiredClass: e.target.value }), disabled: isViewMode }), _jsx(Input, { label: "Projet d'Urgence - Vague 11", name: "emergencyProject", value: " Vague 11", onChange: (e) => onChange({ ...data, emergencyProject: e.target.value }), disabled: isViewMode }), _jsx(Input, { label: "Dortoir", name: "dormitory", value: data.dormitory ?? "", onChange: (e) => onChange({ ...data, dormitory: e.target.value }), disabled: isViewMode }), _jsx(Input, { label: "Fiche renseign\u00E9e le", name: "formDate", value: new Date().toISOString().split("T")[0], type: "date", disabled: isViewMode })] })] }) }) }));
};
