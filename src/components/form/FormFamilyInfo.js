import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Card, CardContent } from "../ui/Card";
export const FormFamilyInfo = ({ data = {}, onChange, isViewMode = false, }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };
    const maritalStatusOptions = [
        { value: "Célibataire", label: "Célibataire" },
        { value: "Marié(e)", label: "Marié(e)" },
        { value: "Divorcé(e)", label: "Divorcé(e)" },
        { value: "Veuf(ve)", label: "Veuf(ve)" },
    ];
    return (_jsx(Card, { children: _jsx(CardContent, { className: "pt-6", children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Informations sur le p\u00E8re" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(Input, { label: "Nom complet", name: "fatherName", value: data.fatherName ?? "", onChange: handleChange, required: true, disabled: isViewMode }), _jsx(Input, { label: "Domicile", name: "fatherResidence", value: data.fatherResidence ?? "", onChange: handleChange, required: true, disabled: isViewMode }), _jsx(Input, { label: "Profession", name: "fatherProfession", value: data.fatherProfession ?? "", onChange: handleChange, required: true, disabled: isViewMode }), _jsx(Input, { label: "Contact", name: "fatherContact", value: data.fatherContact ?? "", onChange: handleChange, placeholder: "+225 XX XX XX XX XX", required: true, disabled: isViewMode })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Informations sur la m\u00E8re" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(Input, { label: "Nom complet", name: "motherName", value: data.motherName ?? "", onChange: handleChange, required: true, disabled: isViewMode }), _jsx(Input, { label: "Domicile", name: "motherResidence", value: data.motherResidence ?? "", onChange: handleChange, required: true, disabled: isViewMode }), _jsx(Input, { label: "Profession", name: "motherProfession", value: data.motherProfession ?? "", onChange: handleChange, required: true, disabled: isViewMode }), _jsx(Input, { label: "Contact", name: "motherContact", value: data.motherContact ?? "", onChange: handleChange, placeholder: "+225 XX XX XX XX XX", required: true, disabled: isViewMode })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Informations sur le tuteur (si applicable)" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(Input, { label: "Nom complet", name: "guardianName", value: data.guardianName ?? "", onChange: handleChange, disabled: isViewMode }), _jsx(Input, { label: "Domicile", name: "guardianResidence", value: data.guardianResidence ?? "", onChange: handleChange, disabled: isViewMode }), _jsx(Input, { label: "Profession", name: "guardianProfession", value: data.guardianProfession ?? "", onChange: handleChange, disabled: isViewMode }), _jsx(Input, { label: "Contact", name: "guardianContact", value: data.guardianContact ?? "", onChange: handleChange, placeholder: "+225 XX XX XX XX XX", disabled: isViewMode })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Situation personnelle" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(Select, { label: "Statut matrimonial", name: "maritalStatus", value: data.maritalStatus ?? "", onChange: handleChange, options: maritalStatusOptions, required: true, disabled: isViewMode }), _jsxs("div", { children: [_jsx("label", { htmlFor: "familyStatus", className: "block text-sm font-medium text-gray-700 mb-2", children: "Situation familiale" }), _jsx(Select, { name: "familyStatus", value: data.familyStatus ?? "", onChange: handleChange, options: [
                                                    {
                                                        value: "vit_chez_ses_parents",
                                                        label: "Vit chez ses parents",
                                                    },
                                                    {
                                                        value: "vit_avec_sa_famille",
                                                        label: "Vit avec sa famille",
                                                    },
                                                    {
                                                        value: "vit_chez_son_tuteur",
                                                        label: "Vit chez son tuteur",
                                                    },
                                                    { value: "vit_seul", label: "Vit seul(e)" },
                                                    { value: "autre", label: "Autre" },
                                                ], disabled: isViewMode }), data.familyStatus === "autre" && (_jsx(Input, { label: "Pr\u00E9cisez votre situation familiale", name: "familyStatusOther", value: data.familyStatusOther ?? "", onChange: handleChange, placeholder: "Entrez votre situation familiale", disabled: isViewMode }))] })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "isOrphan", className: "block text-sm font-medium text-gray-700 mb-2", children: "Es-tu orphelin ?" }), _jsxs("div", { className: "mt-2 space-x-4", children: [_jsxs("label", { className: "inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition", children: [_jsx("input", { type: "radio", name: "isOrphan", value: "yes", onChange: handleChange, disabled: isViewMode, className: "form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300" }), _jsx("span", { className: "ml-2 text-gray-700 font-medium", children: "Oui" })] }), _jsxs("label", { className: "inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition", children: [_jsx("input", { type: "radio", name: "isOrphan", value: "no", onChange: handleChange, disabled: isViewMode, className: "form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300" }), _jsx("span", { className: "ml-2 text-gray-700 font-medium", children: "Non" })] })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "orphanType", className: "block text-sm font-medium text-gray-700 mb-2", children: "Si oui, type (p\u00E8re, m\u00E8re, p\u00E8re et m\u00E8re)" }), _jsx(Select, { name: "orphanType", value: data.orphanType ?? "", onChange: handleChange, options: [
                                    { value: "pere", label: "Père" },
                                    { value: "mere", label: "Mère" },
                                    { value: "pere_et_mere", label: "Père et Mère" },
                                ], disabled: isViewMode || data.isOrphan !== "yes" })] })] }) }) }));
};
