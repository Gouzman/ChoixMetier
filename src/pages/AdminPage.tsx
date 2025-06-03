import React, { useState } from "react";
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
import { mockUsers } from "../data/mockData";
import { Shield } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Modal } from "../components/ui/Modal";
import { Input } from "../components/ui/Input";

const AdminPage: React.FC = () => {
  const { user } = useAuthStore();
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

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
            <Button variant="primary" onClick={() => setAddModalOpen(true)}>
              Ajouter
            </Button>
            <Button
              variant="secondary"
              onClick={() => setEditModalOpen(true)}
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
                <TableHead>Rôle</TableHead>
                <TableHead>Dernière connexion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell className="font-medium">{user.username}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
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
      {isAddModalOpen && (
        <Modal
          title="Ajouter un utilisateur"
          onClose={() => setAddModalOpen(false)}
        >
          <form>
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
              label="Dernière connexion"
              name="lastLogin"
              placeholder="Entrez la date de dernière connexion"
            />
            <Button type="submit" variant="primary" className="mt-4">
              Ajouter
            </Button>
          </form>
        </Modal>
      )}

      {/* Modal for Editing User */}
      {isEditModalOpen && (
        <Modal
          title="Modifier un utilisateur"
          onClose={() => setEditModalOpen(false)}
        >
          <form>
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
              label="Dernière connexion"
              name="lastLogin"
              placeholder="Entrez la date de dernière connexion"
            />
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
