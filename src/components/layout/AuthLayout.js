import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { User } from "lucide-react";
export const AuthLayout = () => {
    const { isAuthenticated, isLoading } = useAuthStore();
    // Show loading state while checking authentication
    if (isLoading) {
        return (_jsx("div", { className: "flex items-center justify-center min-h-screen", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) }));
    }
    // Redirect to dashboard if already authenticated
    if (isAuthenticated) {
        return _jsx(Navigate, { to: "/dashboard", replace: true });
    }
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-gray-50", children: [_jsx("div", { className: "flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-md w-full space-y-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "mx-auto h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center", children: _jsx(User, { className: "h-8 w-8 text-white" }) }), _jsx("h2", { className: "mt-6 text-3xl font-extrabold text-gray-900", children: "Connectez-vous" })] }), _jsx(Outlet, {})] }) }), _jsxs("footer", { className: "py-4 text-center text-sm text-gray-500", children: ["\u00A9 ", new Date().getFullYear(), " FicheDeChoixDeMetier. Tous droits r\u00E9serv\u00E9s."] })] }));
};
