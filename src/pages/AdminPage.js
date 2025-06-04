import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { PageContainer } from "../components/layout/PageContainer";
import { Card, CardHeader, CardTitle, CardContent, } from "../components/ui/Card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "../components/ui/Table";
import { useAuthStore } from "../store/authStore";
import { Alert } from "../components/ui/Alert";
import { formatDate } from "../lib/utils";
import { Shield } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Modal } from "../components/ui/Modal";
import { Input } from "../components/ui/Input";
const AdminPage = () => {
    const { user } = useAuthStore();
    const [users, setUsers] = useState([]);
    const [activeModal, setActiveModal] = useState(null);
    const [addUserForm, setAddUserForm] = useState({
        username: "",
        name: "",
        email: "",
        role: "operator",
    });
    const [editUserForm, setEditUserForm] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        const fetchUsers = async () => {
            // Replace with API call or mock data
            const fetchedUsers = []; // Ajout du type explicite
            setUsers(fetchedUsers);
        };
        fetchUsers();
    }, []);
    const handleEditUser = async (id, userData) => {
        // Replace with API call
        const updatedUser = { ...userData, id };
        setUsers((prev) => prev.map((user) => (user.id === id ? updatedUser : user)));
        setActiveModal(null);
    };
    const handleFormDataConversion = (formData) => {
        const entries = Object.fromEntries(formData.entries());
        return entries;
    };
    // Check if user is admin
    if (user?.role !== "admin") {
        return (_jsx(PageContainer, { children: _jsx(Alert, { variant: "error", title: "Acc\u00E8s refus\u00E9", children: "Vous n'avez pas les droits d'acc\u00E8s \u00E0 cette page." }) }));
    }
    return (_jsxs(PageContainer, { title: "Administration", description: "Gestion des utilisateurs et des param\u00E8tres du syst\u00E8me.", children: [_jsxs(Card, { className: "mb-8", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Utilisateurs du syst\u00E8me" }), _jsxs("div", { className: "flex justify-end", children: [_jsx(Button, { variant: "primary", onClick: () => setActiveModal("add"), children: "Ajouter" }), _jsx(Button, { variant: "secondary", onClick: () => setActiveModal("edit"), className: "ml-4", children: "Modifier" })] })] }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "ID" }), _jsx(TableHead, { children: "Nom d'utilisateur" }), _jsx(TableHead, { children: "Nom complet" }), _jsx(TableHead, { children: "Email" }), _jsx(TableHead, { children: "R\u00F4le" }), _jsx(TableHead, { children: "Derni\u00E8re connexion" })] }) }), _jsx(TableBody, { children: users.map((user) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: user.id }), _jsx(TableCell, { className: "font-medium", children: user.username }), _jsx(TableCell, { children: user.name }), _jsx(TableCell, { children: user.email }), _jsx(TableCell, { children: _jsxs("div", { className: "flex items-center", children: [user.role === "admin" && (_jsx(Shield, { size: 16, className: "mr-1 text-blue-600" })), user.role === "admin" ? "Administrateur" : "Opérateur"] }) }), _jsx(TableCell, { children: user.lastLogin ? formatDate(user.lastLogin) : "N/A" })] }, user.id))) })] }) })] }), activeModal === "add" && (_jsx(Modal, { title: "Ajouter un utilisateur", onClose: () => setActiveModal(null), children: _jsxs("form", { onSubmit: (e) => {
                        e.preventDefault();
                        const userData = { ...addUserForm, lastLogin: null };
                        const newUser = { ...userData, id: users.length + 1 };
                        setUsers((prev) => [...prev, newUser]);
                        setActiveModal(null);
                    }, children: [_jsx(Input, { label: "Nom d'utilisateur", name: "username", value: addUserForm.username, onChange: (e) => setAddUserForm((prev) => ({
                                ...prev,
                                username: e.target.value,
                            })), placeholder: "Entrez le nom d'utilisateur", required: true }), _jsx(Input, { label: "Nom complet", name: "name", value: addUserForm.name, onChange: (e) => setAddUserForm((prev) => ({ ...prev, name: e.target.value })), placeholder: "Entrez le nom complet", required: true }), _jsx(Input, { label: "E-mail", name: "email", value: addUserForm.email, onChange: (e) => setAddUserForm((prev) => ({ ...prev, email: e.target.value })), placeholder: "Entrez l'e-mail", type: "email", required: true }), _jsx(Input, { label: "R\u00F4le", name: "role", value: addUserForm.role, onChange: (e) => setAddUserForm((prev) => ({ ...prev, role: e.target.value })), placeholder: "Entrez le r\u00F4le", required: true }), _jsx(Button, { type: "submit", variant: "primary", className: "mt-4", children: "Ajouter" })] }) })), activeModal === "edit" && (_jsx(Modal, { title: "Modifier un utilisateur", onClose: () => setActiveModal(null), children: _jsxs("form", { onSubmit: (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const userData = handleFormDataConversion(formData);
                        const id = Number(formData.get("id"));
                        handleEditUser(id, userData);
                    }, children: [_jsx(Input, { label: "Identifiant", name: "id", placeholder: "Entrez l'identifiant" }), _jsx(Input, { label: "Nom d'utilisateur", name: "username", placeholder: "Entrez le nom d'utilisateur" }), _jsx(Input, { label: "Nom complet", name: "name", placeholder: "Entrez le nom complet" }), _jsx(Input, { label: "E-mail", name: "email", placeholder: "Entrez l'e-mail" }), _jsx(Input, { label: "R\u00F4le", name: "role", placeholder: "Entrez le r\u00F4le" }), _jsx(Input, { label: "Mot de passe", name: "password", type: showPassword ? "text" : "password", value: editUserForm.password, onChange: (e) => setEditUserForm((prev) => ({
                                ...prev,
                                password: e.target.value,
                            })) // Ajout du type explicite pour 'prev'
                            , placeholder: "Entrez le mot de passe", required: true }), _jsx(Button, { type: "button", variant: "ghost", onClick: () => setShowPassword((prev) => !prev), className: "ml-2", children: showPassword ? "Cacher" : "Afficher" }), _jsx(Button, { type: "submit", variant: "secondary", className: "mt-4", children: "Modifier" })] }) })), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Informations syst\u00E8me" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-sm font-medium text-gray-500", children: "Version de l'application" }), _jsx("p", { className: "mt-1 text-lg", children: "1.0.0" })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-medium text-gray-500", children: "Derni\u00E8re mise \u00E0 jour" }), _jsx("p", { className: "mt-1 text-lg", children: formatDate(new Date()) })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-medium text-gray-500", children: "Environnement" }), _jsx("p", { className: "mt-1 text-lg", children: "Production" })] })] }) })] })] }));
};
export default AdminPage;
