import React from "react";
import { Participant } from "../../types";
interface FormPersonalInfoProps {
    data?: Partial<Participant>;
    onChange: (data: Partial<Participant>) => void;
    isViewMode?: boolean;
}
export declare const FormPersonalInfo: React.FC<FormPersonalInfoProps>;
export {};
