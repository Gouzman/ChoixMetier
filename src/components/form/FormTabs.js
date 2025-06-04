import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs, TabList, TabTrigger, TabContent } from "../ui/Tabs";
import { FormPersonalInfo } from "./FormPersonalInfo";
import { FormFamilyInfo } from "./FormFamilyInfo";
import { FormProfessionalInfo } from "./FormProfessionalInfo";
import { FormProfessionalDetails } from "./FormProfessionalDetails";
import { FormSchoolReturn } from "./FormSchoolReturn";
export const FormTabs = ({ formData, onChange, isViewMode = false, }) => {
    return (_jsxs(Tabs, { defaultValue: "personal", className: "w-full", children: [_jsxs(TabList, { children: [_jsx(TabTrigger, { value: "personal", children: "Informations personnelles" }), _jsx(TabTrigger, { value: "family", children: "Informations familiales" }), _jsx(TabTrigger, { value: "professional", children: "Parcours professionnel" }), _jsx(TabTrigger, { value: "professionalDetails", children: "D\u00E9tails professionnels" }), _jsx(TabTrigger, { value: "schoolReturn", children: "Retour \u00E0 l'\u00E9cole" })] }), _jsx(TabContent, { value: "personal", children: _jsx(FormPersonalInfo, { data: formData.participant || {}, onChange: (participant) => onChange({
                        participant: { ...formData.participant, ...participant },
                    }), isViewMode: isViewMode }) }), _jsx(TabContent, { value: "family", children: _jsx(FormFamilyInfo, { data: formData.familyInfo || {}, onChange: (familyInfo) => onChange({ familyInfo: { ...formData.familyInfo, ...familyInfo } }), isViewMode: isViewMode }) }), _jsx(TabContent, { value: "professional", children: _jsx(FormProfessionalInfo, { data: formData.professionalBackground || {}, onChange: (professionalBackground) => onChange({
                        professionalBackground: {
                            ...formData.professionalBackground,
                            ...professionalBackground,
                        },
                    }), isViewMode: isViewMode }) }), _jsx(TabContent, { value: "professionalDetails", children: _jsx(FormProfessionalDetails, { data: formData.professionalDetails || {}, onChange: (professionalDetails) => onChange({
                        ...formData,
                        professionalDetails: {
                            ...formData.professionalDetails,
                            ...professionalDetails,
                        },
                    }), isViewMode: isViewMode }) }), _jsx(TabContent, { value: "schoolReturn", children: _jsx(FormSchoolReturn, { data: formData.schoolReturn || {}, onChange: (schoolReturn) => onChange({
                        ...formData,
                        schoolReturn: {
                            ...formData.schoolReturn,
                            ...schoolReturn,
                        },
                    }), isViewMode: isViewMode }) })] }));
};
