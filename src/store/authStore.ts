import { create } from "zustand";

interface IUser {
  id: number;
  username: string;
  name: string;
  email: string;
  role: "admin" | "operator";
  lastLogin?: Date;
}

interface AuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (username: string, password: string) => {
    set({ isLoading: true, error: null });

    try {
      // Appeler l'API pour vérifier les identifiants
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const user = await response.json();
        set({
          user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } else {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: "Identifiants incorrects",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: "Erreur de connexion",
      });
    }
  },

  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
      error: null,
    });
  },
}));
