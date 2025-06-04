import React from "react";
import { ProfessionalBackground } from "../../types";
interface FormProfessionalInfoProps {
    data: Partial<ProfessionalBackground>;
    onChange: (data: Partial<ProfessionalBackground>) => void;
    isViewMode?: boolean;
}
export declare const FormProfessionalInfo: React.FC<FormProfessionalInfoProps>;
export {};
