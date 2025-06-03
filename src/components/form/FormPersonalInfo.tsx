import React from "react";
import { Participant } from "../../types";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Card, CardContent } from "../ui/Card";
import { communes, educationLevels, nationalities } from "../../data/mockData";

interface FormPersonalInfoProps {
  data?: Partial<Participant>;
  onChange: (data: Partial<Participant>) => void;
  isViewMode?: boolean;
}

export const FormPersonalInfo: React.FC<FormPersonalInfoProps> = ({
  data = {},
  onChange,
  isViewMode = false,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      onChange({
        ...data,
        address: {
          ...data.address,
          [addressField]: value,
        },
      });
    } else {
      onChange({ ...data, [name]: value });
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Nom"
            name="lastName"
            value={data.lastName ?? ""}
            onChange={handleChange}
            required
            disabled={isViewMode}
          />

          <Input
            label="Prénom"
            name="firstName"
            value={data.firstName ?? ""}
            onChange={handleChange}
            required
            disabled={isViewMode}
          />

          <Input
            label="Date de naissance"
            name="birthDate"
            type="date"
            value={data.birthDate ?? ""}
            onChange={handleChange}
            required
            disabled={isViewMode}
          />

          <Input
            label="Lieu de naissance"
            name="birthPlace"
            value={data.birthPlace ?? ""}
            onChange={handleChange}
            required
            disabled={isViewMode}
          />

          <Select
            label="Commune"
            name="address.commune"
            value={data.address?.commune ?? ""}
            onChange={handleChange}
            options={communes.map((commune) => ({
              value: commune,
              label: commune,
            }))}
            required
            disabled={isViewMode}
          />

          <Input
            label="Quartier"
            name="address.neighborhood"
            value={data.address?.neighborhood ?? ""}
            onChange={handleChange}
            required
            disabled={isViewMode}
          />

          <Input
            label="Sous-quartier"
            name="address.subNeighborhood"
            value={data.address?.subNeighborhood ?? ""}
            onChange={handleChange}
            disabled={isViewMode}
          />

          <Select
            label="Nationalité"
            name="nationality"
            value={data.nationality ?? ""}
            onChange={handleChange}
            options={nationalities.map((nationality) => ({
              value: nationality,
              label: nationality,
            }))}
            required
            disabled={isViewMode}
          />

          <Input
            label="Contact"
            name="contact"
            value={data.contact ?? ""}
            onChange={handleChange}
            placeholder="+225 XX XX XX XX XX"
            required
            disabled={isViewMode}
          />

          <Select
            label="Niveau scolaire"
            name="educationLevel"
            value={data.educationLevel ?? ""}
            onChange={handleChange}
            options={educationLevels.map((level) => ({
              value: level,
              label: level,
            }))}
            required
            disabled={isViewMode}
          />

          {/* For simplicity, we're not handling the diplomas array properly here */}
          <Input
            label="Diplômes obtenus (séparés par des virgules)"
            name="diplomas"
            value={data.diplomas?.join(", ") ?? ""}
            onChange={(e) => {
              onChange({
                ...data,
                diplomas: e.target.value
                  .split(",")
                  .map((d) => d.trim())
                  .filter(Boolean),
              });
            }}
            disabled={isViewMode}
          />
        </div>
      </CardContent>
    </Card>
  );
};
