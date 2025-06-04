import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { FormTabs } from "../components/form/FormTabs";
import { Button } from "../components/ui/Button";
import { Alert } from "../components/ui/Alert";
import { useFormStore } from "../store/formStore";
import { Save, ArrowLeft } from "lucide-react";
const FormCreate = () => {
    const navigate = useNavigate();
    const { createForm, isLoading } = useFormStore();
    const [formData, setFormData] = useState({
        participant: {},
        familyInfo: {},
        professionalBackground: {
            previousJobs: [],
        },
    });
    const [error, setError] = useState(null);
    const handleChange = (data) => {
        setFormData((prev) => ({
            ...prev,
            ...data,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        // Simple validation
        const { participant, familyInfo, professionalBackground } = formData;
        if (!participant?.firstName ||
            !participant?.lastName ||
            !participant?.birthDate ||
            !participant?.address?.commune ||
            !participant?.contact ||
            !participant?.educationLevel) {
            setError("Veuillez remplir tous les champs obligatoires des informations personnelles.");
            return;
        }
        if (!familyInfo?.fatherName ||
            !familyInfo?.fatherContact ||
            !familyInfo?.motherName ||
            !familyInfo?.motherContact ||
            !familyInfo?.maritalStatus ||
            !familyInfo?.familyStatus) {
            setError("Veuillez remplir tous les champs obligatoires des informations familiales.");
            return;
        }
        if (!professionalBackground?.desiredJob) {
            setError("Veuillez sélectionner un métier souhaité.");
            return;
        }
        try {
            createForm(formData);
            navigate("/search");
        }
        catch (err) {
            if (err instanceof Error) {
                setError(`Une erreur est survenue : ${err.message}`);
            }
            else {
                setError("Une erreur inconnue est survenue lors de la création du formulaire.");
            }
        }
    };
    return (_jsxs(PageContainer, { title: "Nouveau formulaire", description: "Saisissez les informations du participant.", children: [_jsx("div", { className: "mb-6", children: _jsx(Button, { variant: "ghost", onClick: () => navigate(-1), icon: _jsx(ArrowLeft, { size: 16 }), children: "Retour" }) }), error && (_jsx(Alert, { variant: "error", title: "Erreur", className: "mb-6", children: error })), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx(FormTabs, { formData: formData, onChange: handleChange }), _jsx("div", { className: "mt-8 flex justify-end", children: _jsx(Button, { type: "submit", isLoading: isLoading, icon: _jsx(Save, { size: 18 }), children: "Enregistrer" }) })] })] }));
};
export default FormCreate;
