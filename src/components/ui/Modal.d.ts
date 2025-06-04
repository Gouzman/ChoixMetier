import React from "react";
interface ModalProps {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}
export declare const Modal: React.FC<ModalProps>;
export {};
