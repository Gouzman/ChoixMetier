import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";
import { Badge } from "../ui/Badge";
import { formatDate } from "../../lib/utils";
import { mockFormData } from "../../data/mockData";
import { Modal } from "../ui/Modal";

export const RecentActivity: React.FC = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  // Get the 5 most recent forms
  const recentForms = [...mockFormData]
    .filter((form) => form.participant.createdAt !== undefined)
    .sort(
      (a, b) =>
        (b.participant.createdAt?.getTime() ?? 0) -
        (a.participant.createdAt?.getTime() ?? 0)
    )
    .slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activité récente</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nom</TableHead>
              <TableHead>Métier</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Statut</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentForms.map((form) => (
              <TableRow key={form.participant.id}>
                <TableCell>{form.participant.id}</TableCell>
                <TableCell className="font-medium">
                  {form.participant.lastName} {form.participant.firstName}
                </TableCell>
                <TableCell>{form.professionalBackground.desiredJob}</TableCell>
                <TableCell>
                  {formatDate(form.participant.createdAt ?? new Date())}
                </TableCell>
                <TableCell>
                  <Badge variant="primary">Inscrit</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      {/* Modal for Adding User */}
      {isAddModalOpen && (
        <Modal
          title="Ajouter un utilisateur"
          onClose={() => setAddModalOpen(false)}
        >
          <p>Formulaire pour ajouter un utilisateur.</p>
        </Modal>
      )}

      {/* Modal for Editing User */}
      {isEditModalOpen && (
        <Modal
          title="Modifier un utilisateur"
          onClose={() => setEditModalOpen(false)}
        >
          <p>Formulaire pour modifier les informations d'un utilisateur.</p>
        </Modal>
      )}
    </Card>
  );
};
