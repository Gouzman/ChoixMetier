import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Card, CardContent } from "../ui/Card";
import { communes, educationLevels, nationalities } from "../../data/mockData";
export const FormPersonalInfo = ({ data = {}, onChange, isViewMode = false, }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("address.")) {
            const addressField = name.split(".")[1];
            onChange({
                ...data,
                address: {
                    ...data.address,
                    [addressField]: value,
                },
            });
        }
        else {
            onChange({ ...data, [name]: value });
        }
    };
    return (_jsx(Card, { children: _jsxs(CardContent, { className: "pt-6", children: [_jsx("h2", { className: "text-lg font-bold text-gray-800 mb-4", children: "Identification" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(Input, { label: "Nom", name: "lastName", value: data.lastName ?? "", onChange: handleChange, required: true, disabled: isViewMode }), _jsx(Input, { label: "Pr\u00E9nom", name: "firstName", value: data.firstName ?? "", onChange: handleChange, required: true, disabled: isViewMode }), _jsx(Input, { label: "Date de naissance", name: "birthDate", type: "date", value: data.birthDate ?? "", onChange: handleChange, required: true, disabled: isViewMode }), _jsx(Input, { label: "Lieu de naissance", name: "birthPlace", value: data.birthPlace ?? "", onChange: handleChange, required: true, disabled: isViewMode }), _jsx(Select, { label: "Commune", name: "address.commune", value: data.address?.commune ?? "", onChange: handleChange, options: communes.map((commune) => ({
                                value: commune,
                                label: commune,
                            })), required: true, disabled: isViewMode }), _jsx(Input, { label: "Quartier", name: "address.neighborhood", value: data.address?.neighborhood ?? "", onChange: handleChange, required: true, disabled: isViewMode }), _jsx(Input, { label: "Sous-quartier", name: "address.subNeighborhood", value: data.address?.subNeighborhood ?? "", onChange: handleChange, disabled: isViewMode }), _jsx(Select, { label: "Nationalit\u00E9", name: "nationality", value: data.nationality ?? "", onChange: handleChange, options: nationalities.map((nationality) => ({
                                value: nationality,
                                label: nationality,
                            })), required: true, disabled: isViewMode }), _jsx(Input, { label: "Contact", name: "contact", value: data.contact ?? "", onChange: handleChange, placeholder: "+225 XX XX XX XX XX", required: true, disabled: isViewMode }), _jsx(Select, { label: "Niveau scolaire", name: "educationLevel", value: data.educationLevel ?? "", onChange: handleChange, options: educationLevels.map((level) => ({
                                value: level,
                                label: level,
                            })), required: true, disabled: isViewMode }), _jsxs("div", { children: [_jsx("label", { htmlFor: "diplomas", className: "block text-sm font-medium text-gray-700 mb-2", children: "Dipl\u00F4mes obtenus" }), _jsxs("div", { className: "mt-2 space-y-2", children: [_jsxs("label", { className: "inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition", children: [_jsx("input", { type: "checkbox", id: "diplomas-none", name: "diplomas", value: "aucun", checked: data.diplomas?.includes("aucun") || false, onChange: (e) => {
                                                        const selectedDiplomas = data.diplomas || [];
                                                        if (e.target.checked) {
                                                            onChange({
                                                                ...data,
                                                                diplomas: ["aucun"],
                                                            });
                                                        }
                                                        else {
                                                            onChange({
                                                                ...data,
                                                                diplomas: selectedDiplomas.filter((d) => d !== "aucun"),
                                                            });
                                                        }
                                                    }, disabled: isViewMode, className: "form-checkbox h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300" }), _jsx("span", { className: "ml-2 text-gray-700 font-medium", children: "Aucun dipl\u00F4me" })] }, "aucun"), educationLevels
                                            .filter((level) => level !== "CAPUCHON" && level !== "BEP")
                                            .concat("Ecole coranique")
                                            .map((level) => (_jsxs("label", { className: "inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition", children: [_jsx("input", { type: "checkbox", id: `diplomas-${level}`, name: "diplomas", value: level, checked: data.diplomas?.includes(level) || false, onChange: (e) => {
                                                        const selectedDiplomas = data.diplomas || [];
                                                        if (e.target.checked) {
                                                            onChange({
                                                                ...data,
                                                                diplomas: [
                                                                    ...selectedDiplomas.filter((d) => d !== "aucun"),
                                                                    level,
                                                                ],
                                                            });
                                                        }
                                                        else {
                                                            onChange({
                                                                ...data,
                                                                diplomas: selectedDiplomas.filter((d) => d !== level),
                                                            });
                                                        }
                                                    }, disabled: isViewMode, className: "form-checkbox h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300" }), _jsx("span", { className: "ml-2 text-gray-700 font-medium", children: level })] }, level)))] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "canRead", className: "block text-sm font-medium text-gray-700 mb-2", children: "Sais-tu lire ?" }), _jsxs("div", { className: "mt-2 space-x-4", children: [_jsxs("label", { className: "inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition", children: [_jsx("input", { type: "radio", name: "canRead", value: "yes", onChange: handleChange, disabled: isViewMode, className: "form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300" }), _jsx("span", { className: "ml-2 text-gray-700 font-medium", children: "Oui" })] }), _jsxs("label", { className: "inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition", children: [_jsx("input", { type: "radio", name: "canRead", value: "no", onChange: handleChange, disabled: isViewMode, className: "form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300" }), _jsx("span", { className: "ml-2 text-gray-700 font-medium", children: "Non" })] })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "canWrite", className: "block text-sm font-medium text-gray-700 mb-2", children: "Sais-tu \u00E9crire ?" }), _jsxs("div", { className: "mt-2 space-x-4", children: [_jsxs("label", { className: "inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition", children: [_jsx("input", { type: "radio", name: "canWrite", value: "yes", onChange: handleChange, disabled: isViewMode, className: "form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300" }), _jsx("span", { className: "ml-2 text-gray-700 font-medium", children: "Oui" })] }), _jsxs("label", { className: "inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition", children: [_jsx("input", { type: "radio", name: "canWrite", value: "no", onChange: handleChange, disabled: isViewMode, className: "form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300" }), _jsx("span", { className: "ml-2 text-gray-700 font-medium", children: "Non" })] })] })] })] })] }) }));
};
