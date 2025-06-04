import { FormData, SearchFilter } from '../types';
interface FormState {
    forms: FormData[];
    currentForm: FormData | null;
    isLoading: boolean;
    searchResults: FormData[];
    error: string | null;
    searchForms: (filter: SearchFilter) => void;
    getForm: (id: string) => FormData | null;
    createForm: (form: Omit<FormData, 'participant.id' | 'participant.createdAt' | 'participant.updatedAt'>) => void;
    updateForm: (id: string, form: Partial<FormData>) => void;
    deleteForm: (id: string) => void;
    setCurrentForm: (id: string | null) => void;
}
export declare const useFormStore: import("zustand").UseBoundStore<import("zustand").StoreApi<FormState>>;
export {};
