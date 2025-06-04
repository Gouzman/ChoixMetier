import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { FormTabs } from '../components/form/FormTabs';
import { Button } from '../components/ui/Button';
import { Alert } from '../components/ui/Alert';
import { useFormStore } from '../store/formStore';
import { Save, ArrowLeft } from 'lucide-react';
const FormEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getForm, updateForm, isLoading } = useFormStore();
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        if (id) {
            const form = getForm(id);
            if (form) {
                setFormData(form);
            }
            setIsLoaded(true);
        }
    }, [id, getForm]);
    const handleChange = (data) => {
        setFormData(prev => ({
            ...prev,
            ...data
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        if (!id)
            return;
        // Simple validation
        const { participant, familyInfo, professionalBackground } = formData;
        if (!participant?.firstName || !participant?.lastName || !participant?.birthDate ||
            !participant?.address?.commune || !participant?.contact || !participant?.educationLevel) {
            setError("Veuillez remplir tous les champs obligatoires des informations personnelles.");
            return;
        }
        if (!familyInfo?.fatherName || !familyInfo?.fatherContact ||
            !familyInfo?.motherName || !familyInfo?.motherContact ||
            !familyInfo?.maritalStatus || !familyInfo?.familyStatus) {
            setError("Veuillez remplir tous les champs obligatoires des informations familiales.");
            return;
        }
        if (!professionalBackground?.desiredJob) {
            setError("Veuillez sélectionner un métier souhaité.");
            return;
        }
        try {
            updateForm(id, formData);
            navigate(`/forms/${id}`);
        }
        catch (err) {
            setError("Une erreur est survenue lors de la mise à jour du formulaire.");
        }
    };
    if (!isLoaded) {
        return (_jsx(PageContainer, { children: _jsx("div", { className: "flex justify-center py-8", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) }) }));
    }
    if (isLoaded && Object.keys(formData).length === 0) {
        return (_jsxs(PageContainer, { children: [_jsx(Alert, { variant: "error", title: "Erreur", children: "Le formulaire demand\u00E9 n'existe pas." }), _jsx("div", { className: "mt-4", children: _jsx(Button, { variant: "ghost", onClick: () => navigate(-1), icon: _jsx(ArrowLeft, { size: 16 }), children: "Retour" }) })] }));
    }
    return (_jsxs(PageContainer, { title: `Modifier: ${formData.participant?.lastName} ${formData.participant?.firstName}`, description: `ID: ${id}`, children: [_jsx("div", { className: "mb-6", children: _jsx(Button, { variant: "ghost", onClick: () => navigate(-1), icon: _jsx(ArrowLeft, { size: 16 }), children: "Retour" }) }), error && (_jsx(Alert, { variant: "error", title: "Erreur", className: "mb-6", children: error })), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx(FormTabs, { formData: formData, onChange: handleChange }), _jsx("div", { className: "mt-8 flex justify-end", children: _jsx(Button, { type: "submit", isLoading: isLoading, icon: _jsx(Save, { size: 18 }), children: "Enregistrer les modifications" }) })] })] }));
};
export default FormEdit;
