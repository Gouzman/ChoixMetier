import React from "react";
import { FamilyInfo } from "../../types";
interface FormFamilyInfoProps {
    data?: Partial<FamilyInfo>;
    onChange: (data: Partial<FamilyInfo>) => void;
    isViewMode?: boolean;
}
export declare const FormFamilyInfo: React.FC<FormFamilyInfoProps>;
export {};
