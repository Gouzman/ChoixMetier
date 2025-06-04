import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { FormTabs } from '../components/form/FormTabs';
import { Button } from '../components/ui/Button';
import { Alert } from '../components/ui/Alert';
import { useFormStore } from '../store/formStore';
import { ArrowLeft, Edit } from 'lucide-react';
const FormView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getForm, setCurrentForm, currentForm } = useFormStore();
    useEffect(() => {
        if (id) {
            setCurrentForm(id);
        }
        return () => {
            setCurrentForm(null);
        };
    }, [id, setCurrentForm]);
    if (!currentForm && id) {
        const form = getForm(id);
        if (!form) {
            return (_jsxs(PageContainer, { children: [_jsx(Alert, { variant: "error", title: "Erreur", children: "Le formulaire demand\u00E9 n'existe pas." }), _jsx("div", { className: "mt-4", children: _jsx(Button, { variant: "ghost", onClick: () => navigate(-1), icon: _jsx(ArrowLeft, { size: 16 }), children: "Retour" }) })] }));
        }
    }
    if (!currentForm) {
        return (_jsx(PageContainer, { children: _jsx("div", { className: "flex justify-center py-8", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) }) }));
    }
    return (_jsxs(PageContainer, { title: `${currentForm.participant.lastName} ${currentForm.participant.firstName}`, description: `ID: ${currentForm.participant.id} | Métier souhaité: ${currentForm.professionalBackground.desiredJob}`, children: [_jsxs("div", { className: "mb-6 flex flex-wrap gap-2 justify-between", children: [_jsx(Button, { variant: "ghost", onClick: () => navigate(-1), icon: _jsx(ArrowLeft, { size: 16 }), children: "Retour" }), _jsx(Button, { variant: "outline", onClick: () => navigate(`/forms/${id}/edit`), icon: _jsx(Edit, { size: 16 }), children: "Modifier" })] }), _jsx(FormTabs, { formData: currentForm, onChange: () => { }, isViewMode: true })] }));
};
export default FormView;
