import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Header } from './Header';
import { Footer } from './Footer';
export const AppLayout = () => {
    const { isAuthenticated, isLoading } = useAuthStore();
    // Show loading state while checking authentication
    if (isLoading) {
        return (_jsx("div", { className: "flex items-center justify-center min-h-screen", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) }));
    }
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: "/login", replace: true });
    }
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-gray-50", children: [_jsx(Header, {}), _jsx("main", { className: "flex-1", children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
};
