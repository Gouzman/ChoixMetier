import React from "react";
import { SchoolReturn } from "../../types";
interface FormSchoolReturnProps {
    data: SchoolReturn;
    onChange: (updatedData: SchoolReturn) => void;
    isViewMode: boolean;
}
export declare const FormSchoolReturn: React.FC<FormSchoolReturnProps>;
export {};
