import React from "react";
import { Input } from "../ui/Input";
import { Card, CardContent } from "../ui/Card";
import { SchoolReturn } from "../../types";
import { Select } from "../ui/Select";

interface FormSchoolReturnProps {
  data: SchoolReturn;
  onChange: (updatedData: SchoolReturn) => void;
  isViewMode: boolean;
}

export const FormSchoolReturn: React.FC<FormSchoolReturnProps> = ({
  data,
  onChange,
  isViewMode,
}) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            SECTION : CAS DE RETOUR À L'ÉCOLE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Depuis quand as-tu arrêté ?"
              name="schoolStopDate"
              placeholder="Entrez la date"
              value={data.schoolStopDate ?? ""}
              onChange={(e) =>
                onChange({ ...data, schoolStopDate: e.target.value })
              }
              disabled={isViewMode}
            />

            <Select
              label="Dernière Classe"
              name="lastClass"
              options={[
                { value: "CP1", label: "CP1" },
                { value: "CP2", label: "CP2" },
                { value: "CE1", label: "CE1" },
                { value: "CE2", label: "CE2" },
                { value: "CM1", label: "CM1" },
                { value: "CM2", label: "CM2" },
                { value: "6ème", label: "6ème" },
                { value: "5ème", label: "5ème" },
                { value: "4ème", label: "4ème" },
                { value: "3ème", label: "3ème" },
                { value: "Seconde", label: "Seconde" },
                { value: "Première", label: "Première" },
                { value: "Terminale", label: "Terminale" },
                { value: "BTS", label: "BTS Première annee" },
                { value: "BTS", label: "BTS Deuxieme annee" },
                { value: "Licence", label: "Licence" },
              ]}
              value={data.lastClass ?? ""}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChange({ ...data, lastClass: e.target.value })
              }
              disabled={isViewMode}
            />

            <Input
              label="Veux-tu reprendre à partir de quelle Classe ?"
              name="desiredClass"
              placeholder="Ex: CM2, 3ème"
              value={data.desiredClass ?? ""}
              onChange={(e) =>
                onChange({ ...data, desiredClass: e.target.value })
              }
              disabled={isViewMode}
            />

            <Input
              label="Projet d'Urgence - Vague 11"
              name="emergencyProject"
              value=" Vague 11"
              onChange={(e) =>
                onChange({ ...data, emergencyProject: e.target.value })
              }
              disabled={isViewMode}
            />

            <Input
              label="Dortoir"
              name="dormitory"
              value={data.dormitory ?? ""}
              onChange={(e) => onChange({ ...data, dormitory: e.target.value })}
              disabled={isViewMode}
            />

            <Input
              label="Fiche renseignée le"
              name="formDate"
              value={new Date().toISOString().split("T")[0]}
              type="date"
              disabled={isViewMode}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
