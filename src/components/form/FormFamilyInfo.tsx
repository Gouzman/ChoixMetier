import React from "react";
import { FamilyInfo } from "../../types";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Card, CardContent } from "../ui/Card";

interface FormFamilyInfoProps {
  data?: Partial<FamilyInfo>;
  onChange: (data: Partial<FamilyInfo>) => void;
  isViewMode?: boolean;
}

export const FormFamilyInfo: React.FC<FormFamilyInfoProps> = ({
  data = {},
  onChange,
  isViewMode = false,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const maritalStatusOptions = [
    { value: "Célibataire", label: "Célibataire" },
    { value: "Marié(e)", label: "Marié(e)" },
    { value: "Divorcé(e)", label: "Divorcé(e)" },
    { value: "Veuf(ve)", label: "Veuf(ve)" },
  ];

  const familyStatusOptions = [
    { value: "Vit chez ses parents", label: "Vit chez ses parents" },
    { value: "Vit avec sa famille", label: "Vit avec sa famille" },
    { value: "Vit chez son tuteur", label: "Vit chez son tuteur" },
    { value: "Vit seul(e)", label: "Vit seul(e)" },
    { value: "Autre", label: "Autre" },
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Informations sur le père
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nom complet"
                name="fatherName"
                value={data.fatherName ?? ""}
                onChange={handleChange}
                required
                disabled={isViewMode}
              />

              <Input
                label="Domicile"
                name="fatherResidence"
                value={data.fatherResidence ?? ""}
                onChange={handleChange}
                required
                disabled={isViewMode}
              />

              <Input
                label="Profession"
                name="fatherProfession"
                value={data.fatherProfession ?? ""}
                onChange={handleChange}
                required
                disabled={isViewMode}
              />

              <Input
                label="Contact"
                name="fatherContact"
                value={data.fatherContact ?? ""}
                onChange={handleChange}
                placeholder="+225 XX XX XX XX XX"
                required
                disabled={isViewMode}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Informations sur la mère
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nom complet"
                name="motherName"
                value={data.motherName ?? ""}
                onChange={handleChange}
                required
                disabled={isViewMode}
              />

              <Input
                label="Domicile"
                name="motherResidence"
                value={data.motherResidence ?? ""}
                onChange={handleChange}
                required
                disabled={isViewMode}
              />

              <Input
                label="Profession"
                name="motherProfession"
                value={data.motherProfession ?? ""}
                onChange={handleChange}
                required
                disabled={isViewMode}
              />

              <Input
                label="Contact"
                name="motherContact"
                value={data.motherContact ?? ""}
                onChange={handleChange}
                placeholder="+225 XX XX XX XX XX"
                required
                disabled={isViewMode}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Informations sur le tuteur (si applicable)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nom complet"
                name="guardianName"
                value={data.guardianName ?? ""}
                onChange={handleChange}
                disabled={isViewMode}
              />

              <Input
                label="Domicile"
                name="guardianResidence"
                value={data.guardianResidence ?? ""}
                onChange={handleChange}
                disabled={isViewMode}
              />

              <Input
                label="Profession"
                name="guardianProfession"
                value={data.guardianProfession ?? ""}
                onChange={handleChange}
                disabled={isViewMode}
              />

              <Input
                label="Contact"
                name="guardianContact"
                value={data.guardianContact ?? ""}
                onChange={handleChange}
                placeholder="+225 XX XX XX XX XX"
                disabled={isViewMode}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Situation personnelle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Statut matrimonial"
                name="maritalStatus"
                value={data.maritalStatus ?? ""}
                onChange={handleChange}
                options={maritalStatusOptions}
                required
                disabled={isViewMode}
              />

              <Select
                label="Situation familiale"
                name="familyStatus"
                value={data.familyStatus ?? ""}
                onChange={handleChange}
                options={familyStatusOptions}
                required
                disabled={isViewMode}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
