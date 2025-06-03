import React from 'react';
import { Link } from 'react-router-dom';
import { useFormStore } from '../../store/formStore';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/Table';
import { Button } from '../ui/Button';
import { formatDate } from '../../lib/utils';
import { Eye, Edit, FileText } from 'lucide-react';

export const SearchResults: React.FC = () => {
  const { searchResults, isLoading } = useFormStore();
  
  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (searchResults.length === 0) {
    return (
      <div className="text-center py-8 bg-white rounded-lg border border-gray-200">
        <FileText className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun résultat</h3>
        <p className="mt-1 text-sm text-gray-500">
          Aucun formulaire ne correspond à votre recherche.
        </p>
      </div>
    );
  }
  
  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900">
          Résultats ({searchResults.length})
        </h3>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nom & Prénom</TableHead>
            <TableHead>Commune</TableHead>
            <TableHead>Métier souhaité</TableHead>
            <TableHead>Date d'ajout</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {searchResults.map((form) => (
            <TableRow key={form.participant.id}>
              <TableCell>{form.participant.id}</TableCell>
              <TableCell className="font-medium">
                {form.participant.lastName} {form.participant.firstName}
              </TableCell>
              <TableCell>{form.participant.address.commune}</TableCell>
              <TableCell>{form.professionalBackground.desiredJob}</TableCell>
              <TableCell>{formatDate(form.participant.createdAt)}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Link to={`/forms/${form.participant.id}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={<Eye size={16} />}
                    >
                      Voir
                    </Button>
                  </Link>
                  <Link to={`/forms/${form.participant.id}/edit`}>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<Edit size={16} />}
                    >
                      Modifier
                    </Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};