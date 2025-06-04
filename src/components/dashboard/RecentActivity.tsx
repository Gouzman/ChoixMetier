import React from "react";
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

export const RecentActivity: React.FC = () => {
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
    </Card>
  );
};
