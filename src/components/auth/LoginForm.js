import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Alert } from "../ui/Alert";
import { User, Lock } from "lucide-react";
export const LoginForm = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { login, isLoading, error } = useAuthStore();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            navigate("/dashboard");
        }
        catch (error) {
            console.error("Erreur lors de la connexion :", error);
            // Vous pouvez également afficher un message d'erreur ou effectuer une autre action ici
        }
    };
    return (_jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [_jsxs("div", { className: "rounded-md shadow-sm space-y-4", children: [_jsx(Input, { id: "username", name: "username", type: "text", label: "Nom d'utilisateur", required: true, autoComplete: "username", value: username, onChange: (e) => setUsername(e.target.value), icon: _jsx(User, { size: 18 }) }), _jsx(Input, { id: "password", name: "password", type: "password", label: "Mot de passe", required: true, autoComplete: "current-password", value: password, onChange: (e) => setPassword(e.target.value), icon: _jsx(Lock, { size: 18 }) })] }), error && (_jsx(Alert, { variant: "error", title: "Erreur de connexion", children: error })), _jsx("div", { children: _jsx(Button, { type: "submit", isLoading: isLoading, className: "w-full", children: "Se connecter" }) }), _jsx("div", { className: "text-center text-sm", children: _jsxs("p", { className: "text-gray-600", children: ["Pour la d\u00E9mo: ", _jsx("br", {}), "Admin: ", _jsx("code", { className: "bg-gray-100 px-1 rounded", children: "admin" }), " /", " ", _jsx("code", { className: "bg-gray-100 px-1 rounded", children: "password" }), " ", _jsx("br", {}), "Op\u00E9rateur: ", _jsx("code", { className: "bg-gray-100 px-1 rounded", children: "operator" }), " ", "/ ", _jsx("code", { className: "bg-gray-100 px-1 rounded", children: "password" })] }) })] }));
};
