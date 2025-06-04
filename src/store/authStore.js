import { create } from 'zustand';
import { mockUsers } from '../data/mockData';
export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    login: async (username, password) => {
        set({ isLoading: true, error: null });
        try {
            // Simulate API call with a small delay
            await new Promise(resolve => setTimeout(resolve, 800));
            // Simple mock authentication
            // In a real app, this would be an API call to a backend
            const user = mockUsers.find(u => u.username === username);
            if (user && password === 'password') { // In real app, use proper password validation
                set({
                    user,
                    isAuthenticated: true,
                    isLoading: false,
                    error: null
                });
            }
            else {
                set({
                    user: null,
                    isAuthenticated: false,
                    isLoading: false,
                    error: 'Identifiants incorrects'
                });
            }
        }
        catch (error) {
            set({
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: 'Erreur de connexion'
            });
        }
    },
    logout: () => {
        set({
            user: null,
            isAuthenticated: false,
            error: null
        });
    }
}));
