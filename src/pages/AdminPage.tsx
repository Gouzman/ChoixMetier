import React, { useState, useEffect } from "react";
import { PageContainer } from "../components/layout/PageContainer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/Table";
import { useAuthStore } from "../store/authStore";
import { Alert } from "../components/ui/Alert";
import { formatDate } from "../lib/utils";
import { Shield } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Modal } from "../components/ui/Modal";
import { Input } from "../components/ui/Input";

const AdminPage: React.FC = () => {
  const { user } = useAuthStore();
  const [users, setUsers] = useState<any[]>([]);
  const [activeModal, setActiveModal] = useState<"add" | "edit" | null>(null);
  const [addUserForm, setAddUserForm] = useState({
    username: "",
    name: "",
    email: "",
    role: "operator",
    password: "", // Ajout du champ password
  });
  const [editUserForm, setEditUserForm] = useState<any>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      // Replace with API call or mock data
      const fetchedUsers: any[] = []; // Ajout du type explicite
      setUsers(fetchedUsers);
    };
    fetchUsers();
  }, []);

  const handleEditUser = async (id: number, userData: any) => {
    // Replace with API call
    const updatedUser = { ...userData, id };
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? updatedUser : user))
    );
    setActiveModal(null);
  };

  const handleFormDataConversion = (formData: FormData): any => {
    const entries = Object.fromEntries(formData.entries());
    return entries;
  };

  // Check if user is admin
  if (user?.role !== "admin") {
    return (
      <PageContainer>
        <Alert variant="error" title="Accès refusé">
          Vous n'avez pas les droits d'accès à cette page.
        </Alert>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title="Administration"
      description="Gestion des utilisateurs et des paramètres du système."
    >
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Utilisateurs du système</CardTitle>
          <div className="flex justify-end">
            <Button variant="primary" onClick={() => setActiveModal("add")}>
              Ajouter
            </Button>
            <Button
              variant="secondary"
              onClick={() => setActiveModal("edit")}
              className="ml-4"
            >
              Modifier
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nom d'utilisateur</TableHead>
                <TableHead>Nom complet</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Mot de passe</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Dernière connexion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell className="font-medium">{user.username}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {user.password ? (
                        <span className="text-green-600 text-sm">Défini</span>
                      ) : (
                        <span className="text-red-600 text-sm">Non défini</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {user.role === "admin" && (
                        <Shield size={16} className="mr-1 text-blue-600" />
                      )}
                      {user.role === "admin" ? "Administrateur" : "Opérateur"}
                    </div>
                  </TableCell>
                  <TableCell>
                    {user.lastLogin ? formatDate(user.lastLogin) : "N/A"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Modal for Adding User */}
      {activeModal === "add" && (
        <Modal
          title="Ajouter un utilisateur"
          onClose={() => setActiveModal(null)}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const userData = { ...addUserForm, lastLogin: null };
              const newUser = { ...userData, id: users.length + 1 };
              setUsers((prev) => [...prev, newUser]);
              setActiveModal(null);
            }}
          >
            <Input
              label="Nom d'utilisateur"
              name="username"
              value={addUserForm.username}
              onChange={(e) =>
                setAddUserForm((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
              placeholder="Entrez le nom d'utilisateur"
              required
            />
            <Input
              label="Nom complet"
              name="name"
              value={addUserForm.name}
              onChange={(e) =>
                setAddUserForm((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Entrez le nom complet"
              required
            />
            <Input
              label="E-mail"
              name="email"
              value={addUserForm.email}
              onChange={(e) =>
                setAddUserForm((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Entrez l'e-mail"
              type="email"
              required
            />
            <Input
              label="Rôle"
              name="role"
              value={addUserForm.role}
              onChange={(e) =>
                setAddUserForm((prev) => ({ ...prev, role: e.target.value }))
              }
              placeholder="Entrez le rôle"
              required
            />
            <div className="relative">
              <Input
                label="Mot de passe"
                name="password"
                type={showPassword ? "text" : "password"}
                value={addUserForm.password}
                onChange={(e) =>
                  setAddUserForm((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                placeholder="Entrez le mot de passe"
                required
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-8"
              >
                {showPassword ? "Cacher" : "Afficher"}
              </Button>
            </div>
            <Button type="submit" variant="primary" className="mt-4">
              Ajouter
            </Button>
          </form>
        </Modal>
      )}

      {/* Modal for Editing User */}
      {activeModal === "edit" && (
        <Modal
          title="Modifier un utilisateur"
          onClose={() => setActiveModal(null)}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const userData = handleFormDataConversion(formData);
              const id = Number(formData.get("id"));
              handleEditUser(id, userData);
            }}
          >
            <Input
              label="Identifiant"
              name="id"
              placeholder="Entrez l'identifiant"
            />
            <Input
              label="Nom d'utilisateur"
              name="username"
              placeholder="Entrez le nom d'utilisateur"
            />
            <Input
              label="Nom complet"
              name="name"
              placeholder="Entrez le nom complet"
            />
            <Input label="E-mail" name="email" placeholder="Entrez l'e-mail" />
            <Input label="Rôle" name="role" placeholder="Entrez le rôle" />
            <Input
              label="Mot de passe"
              name="password"
              type={showPassword ? "text" : "password"}
              value={editUserForm.password}
              onChange={
                (e) =>
                  setEditUserForm((prev: any) => ({
                    ...prev,
                    password: e.target.value,
                  })) // Ajout du type explicite pour 'prev'
              }
              placeholder="Entrez le mot de passe"
              required
            />
            <Button
              type="button"
              variant="ghost"
              onClick={() => setShowPassword((prev) => !prev)}
              className="ml-2"
            >
              {showPassword ? "Cacher" : "Afficher"}
            </Button>
            <Button type="submit" variant="secondary" className="mt-4">
              Modifier
            </Button>
          </form>
        </Modal>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Informations système</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Version de l'application
                </h3>
                <p className="mt-1 text-lg">1.0.0</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Dernière mise à jour
                </h3>
                <p className="mt-1 text-lg">{formatDate(new Date())}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Environnement
              </h3>
              <p className="mt-1 text-lg">Production</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default AdminPage;
