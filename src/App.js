import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import { AuthLayout } from './components/layout/AuthLayout';
import { AppLayout } from './components/layout/AppLayout';
// Dynamically import pages for better code splitting
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const FormCreate = React.lazy(() => import('./pages/FormCreate'));
const FormView = React.lazy(() => import('./pages/FormView'));
const FormEdit = React.lazy(() => import('./pages/FormEdit'));
const AdminPage = React.lazy(() => import('./pages/AdminPage'));
const Loading = () => (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) }));
function App() {
    return (_jsx(BrowserRouter, { children: _jsx(React.Suspense, { fallback: _jsx(Loading, {}), children: _jsxs(Routes, { children: [_jsxs(Route, { path: "/", element: _jsx(AuthLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Navigate, { to: "/login\\", replace: true }) }), _jsx(Route, { path: "login", element: _jsx(LoginForm, {}) })] }), _jsxs(Route, { path: "/", element: _jsx(AppLayout, {}), children: [_jsx(Route, { path: "dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "search", element: _jsx(SearchPage, {}) }), _jsx(Route, { path: "forms/new", element: _jsx(FormCreate, {}) }), _jsx(Route, { path: "forms/:id", element: _jsx(FormView, {}) }), _jsx(Route, { path: "forms/:id/edit", element: _jsx(FormEdit, {}) }), _jsx(Route, { path: "admin", element: _jsx(AdminPage, {}) })] }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/dashboard\\", replace: true }) })] }) }) }));
}
export default App;
