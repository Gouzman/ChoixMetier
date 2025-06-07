import { create } from "zustand";
import { mockFormData } from "../data/mockData";
import { FormData, SearchFilter, Participant } from "../types";
import { generateId } from "../lib/utils";

interface FormState {
  forms: FormData[];
  currentForm: FormData | null;
  isLoading: boolean;
  searchResults: FormData[];
  error: string | null;

  searchForms: (filter: SearchFilter) => void;
  getForm: (id: string) => FormData | null;
  createForm: (
    form: Omit<
      FormData,
      "participant.id" | "participant.createdAt" | "participant.updatedAt"
    >
  ) => void;
  updateForm: (id: string, form: Partial<FormData>) => void;
  deleteForm: (id: string) => void;
  setCurrentForm: (id: string | null) => void;
  clearError: () => void;
}

const initialState = {
  forms: mockFormData,
  currentForm: null,
  isLoading: false,
  searchResults: [],
  error: null,
};

export const useFormStore = create<FormState>((set, get) => ({
  ...initialState,

  searchForms: (filter: SearchFilter) => {
    set({ isLoading: true, error: null });

    try {
      // Simulate API call
      setTimeout(() => {
        const { forms } = get();

        const results = forms.filter((form) => {
          const { participant, professionalBackground } = form;

          // Basic text search
          const matchesQuery = filter.query
            ? `${participant.firstName} ${participant.lastName} ${participant.id}`
                .toLowerCase()
                .includes(filter.query.toLowerCase())
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

          return (
            matchesQuery &&
            matchesCommune &&
            matchesEducation &&
            matchesNationality &&
            matchesJob
          );
        });

        set({
          searchResults: results,
          isLoading: false,
        });
      }, 500);
    } catch (error) {
      console.error("Erreur lors de la recherche:", error);
      set({
        error: error instanceof Error ? error.message : "Erreur lors de la recherche",
        isLoading: false,
        searchResults: [],
      });
    }
  },

  getForm: (id: string) => {
    try {
      return get().forms.find((form) => form.participant.id === id) || null;
    } catch (error) {
      console.error("Erreur lors de la récupération du formulaire:", error);
      set({ error: error instanceof Error ? error.message : "Erreur lors de la récupération du formulaire" });
      return null;
    }
  },

  createForm: (formData) => {
    set({ isLoading: true, error: null });

    try {
      const id = generateId("P");
      const now = new Date();

      const newForm: FormData = {
        participant: {
          ...(formData.participant as Omit<Participant, "id" | "createdAt" | "updatedAt">),
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

      set((state) => ({
        forms: [...state.forms, newForm],
        currentForm: newForm,
        isLoading: false,
      }));
    } catch (error) {
      console.error("Erreur lors de la création du formulaire:", error);
      set({
        error: error instanceof Error ? error.message : "Erreur lors de la création du formulaire",
        isLoading: false,
      });
      throw error; // Propager l'erreur pour la gestion au niveau du composant
    }
  },

  updateForm: (id: string, formData) => {
    set({ isLoading: true, error: null });

    try {
      set((state) => {
        const formIndex = state.forms.findIndex(
          (form) => form.participant.id === id
        );

        if (formIndex === -1) {
          throw new Error("Formulaire non trouvé");
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
    } catch (error) {
      console.error("Erreur lors de la mise à jour du formulaire:", error);
      set({
        error: error instanceof Error ? error.message : "Erreur lors de la mise à jour du formulaire",
        isLoading: false,
      });
      throw error; // Propager l'erreur pour la gestion au niveau du composant
    }
  },

  deleteForm: (id: string) => {
    set({ isLoading: true, error: null });

    try {
      set((state) => {
        const formExists = state.forms.some((form) => form.participant.id === id);
        if (!formExists) {
          throw new Error("Formulaire non trouvé");
        }

        return {
          forms: state.forms.filter((form) => form.participant.id !== id),
          currentForm: state.currentForm?.participant.id === id ? null : state.currentForm,
          isLoading: false,
        };
      });
    } catch (error) {
      console.error("Erreur lors de la suppression du formulaire:", error);
      set({
        error: error instanceof Error ? error.message : "Erreur lors de la suppression du formulaire",
        isLoading: false,
      });
      throw error; // Propager l'erreur pour la gestion au niveau du composant
    }
  },

  setCurrentForm: (id: string | null) => {
    set({ error: null });
    if (id === null) {
      set({ currentForm: null });
      return;
    }

    try {
      const form = get().forms.find((form) => form.participant.id === id);
      if (!form) {
        throw new Error("Formulaire non trouvé");
      }
      set({ currentForm: form });
    } catch (error) {
      console.error("Erreur lors de la sélection du formulaire:", error);
      set({
        error: error instanceof Error ? error.message : "Erreur lors de la sélection du formulaire",
        currentForm: null,
      });
    }
  },

  clearError: () => {
    set({ error: null });
  },
}));
