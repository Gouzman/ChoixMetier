import { create } from 'zustand';
import { mockFormData } from '../data/mockData';
import { generateId } from '../lib/utils';
const initialState = {
    forms: mockFormData,
    currentForm: null,
    isLoading: false,
    searchResults: [],
    error: null,
};
export const useFormStore = create((set, get) => ({
    ...initialState,
    searchForms: (filter) => {
        set({ isLoading: true });
        try {
            // Simulate API call
            setTimeout(() => {
                const { forms } = get();
                const results = forms.filter(form => {
                    const { participant, professionalBackground } = form;
                    // Basic text search
                    const matchesQuery = filter.query
                        ? `${participant.firstName} ${participant.lastName} ${participant.id}`.toLowerCase().includes(filter.query.toLowerCase())
                        : true;
                    // Filter by commune if specified
                    const matchesCommune = filter.commune
                        ? participant.address?.commune === filter.commune
                        : true;
                    // Filter by education level if specified
                    const matchesEducation = filter.educationLevel
                        ? participant.educationLevel === filter.educationLevel
                        : true;
                    // Filter by nationality if specified
                    const matchesNationality = filter.nationality
                        ? participant.nationality === filter.nationality
                        : true;
                    // Filter by desired job if specified
                    const matchesJob = filter.desiredJob
                        ? professionalBackground.desiredJob === filter.desiredJob
                        : true;
                    return matchesQuery && matchesCommune && matchesEducation && matchesNationality && matchesJob;
                });
                set({
                    searchResults: results,
                    isLoading: false
                });
            }, 500);
        }
        catch (error) {
            set({
                error: 'Erreur lors de la recherche',
                isLoading: false
            });
        }
    },
    getForm: (id) => {
        return get().forms.find(form => form.participant.id === id) || null;
    },
    createForm: (formData) => {
        set({ isLoading: true });
        try {
            // Generate a new ID for the participant
            const id = generateId('P');
            const now = new Date();
            // Create the complete form with generated ID and timestamps
            const newForm = {
                participant: {
                    ...formData.participant,
                    id,
                    createdAt: now,
                    updatedAt: now,
                },
                familyInfo: {
                    ...formData.familyInfo,
                    participantId: id,
                },
                professionalBackground: {
                    ...formData.professionalBackground,
                    participantId: id,
                },
            };
            set(state => ({
                forms: [...state.forms, newForm],
                currentForm: newForm,
                isLoading: false,
            }));
        }
        catch (error) {
            set({
                error: 'Erreur lors de la création du formulaire',
                isLoading: false,
            });
        }
    },
    updateForm: (id, formData) => {
        set({ isLoading: true });
        try {
            set(state => {
                const formIndex = state.forms.findIndex(form => form.participant.id === id);
                if (formIndex === -1) {
                    return {
                        error: 'Formulaire non trouvé',
                        isLoading: false,
                    };
                }
                const updatedForm = {
                    ...state.forms[formIndex],
                    ...formData,
                    participant: {
                        ...state.forms[formIndex].participant,
                        ...(formData.participant || {}),
                        updatedAt: new Date(),
                    },
                };
                const updatedForms = [...state.forms];
                updatedForms[formIndex] = updatedForm;
                return {
                    forms: updatedForms,
                    currentForm: updatedForm,
                    isLoading: false,
                };
            });
        }
        catch (error) {
            set({
                error: 'Erreur lors de la mise à jour du formulaire',
                isLoading: false,
            });
        }
    },
    deleteForm: (id) => {
        set({ isLoading: true });
        try {
            set(state => ({
                forms: state.forms.filter(form => form.participant.id !== id),
                currentForm: state.currentForm?.participant.id === id ? null : state.currentForm,
                isLoading: false,
            }));
        }
        catch (error) {
            set({
                error: 'Erreur lors de la suppression du formulaire',
                isLoading: false,
            });
        }
    },
    setCurrentForm: (id) => {
        if (id === null) {
            set({ currentForm: null });
            return;
        }
        const form = get().forms.find(form => form.participant.id === id) || null;
        set({ currentForm: form });
    },
}));
