import React from "react";
import { FormData } from "../../types";
interface FormTabsProps {
    formData: Partial<FormData>;
    onChange: (data: Partial<FormData>) => void;
    isViewMode?: boolean;
}
export declare const FormTabs: React.FC<FormTabsProps>;
export {};
