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
        <h2 className="text-lg font-bold text-gray-800 mb-4">Identification</h2>
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

          <div>
            <label
              htmlFor="diplomas"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Diplômes obtenus
            </label>
            <div className="mt-2 space-y-2">
              <label
                key="aucun"
                className="inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition"
              >
                <input
                  type="checkbox"
                  id="diplomas-none"
                  name="diplomas"
                  value="aucun"
                  checked={data.diplomas?.includes("aucun") || false}
                  onChange={(e) => {
                    const selectedDiplomas = data.diplomas || [];
                    if (e.target.checked) {
                      onChange({
                        ...data,
                        diplomas: ["aucun"],
                      });
                    } else {
                      onChange({
                        ...data,
                        diplomas: selectedDiplomas.filter((d) => d !== "aucun"),
                      });
                    }
                  }}
                  disabled={isViewMode}
                  className="form-checkbox h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
                />
                <span className="ml-2 text-gray-700 font-medium">
                  Aucun diplôme
                </span>
              </label>
              {educationLevels
                .filter((level) => level !== "CAPUCHON" && level !== "BEP")
                .concat("Ecole coranique")
                .map((level) => (
                  <label
                    key={level}
                    className="inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition"
                  >
                    <input
                      type="checkbox"
                      id={`diplomas-${level}`}
                      name="diplomas"
                      value={level}
                      checked={data.diplomas?.includes(level) || false}
                      onChange={(e) => {
                        const selectedDiplomas = data.diplomas || [];
                        if (e.target.checked) {
                          onChange({
                            ...data,
                            diplomas: [
                              ...selectedDiplomas.filter((d) => d !== "aucun"),
                              level,
                            ],
                          });
                        } else {
                          onChange({
                            ...data,
                            diplomas: selectedDiplomas.filter(
                              (d) => d !== level
                            ),
                          });
                        }
                      }}
                      disabled={isViewMode}
                      className="form-checkbox h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
                    />
                    <span className="ml-2 text-gray-700 font-medium">
                      {level}
                    </span>
                  </label>
                ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="canRead"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Sais-tu lire ?
            </label>
            <div className="mt-2 space-x-4">
              <label className="inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition">
                <input
                  type="radio"
                  name="canRead"
                  value="yes"
                  onChange={handleChange}
                  disabled={isViewMode}
                  className="form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
                />
                <span className="ml-2 text-gray-700 font-medium">Oui</span>
              </label>
              <label className="inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition">
                <input
                  type="radio"
                  name="canRead"
                  value="no"
                  onChange={handleChange}
                  disabled={isViewMode}
                  className="form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
                />
                <span className="ml-2 text-gray-700 font-medium">Non</span>
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="canWrite"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Sais-tu écrire ?
            </label>
            <div className="mt-2 space-x-4">
              <label className="inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition">
                <input
                  type="radio"
                  name="canWrite"
                  value="yes"
                  onChange={handleChange}
                  disabled={isViewMode}
                  className="form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
                />
                <span className="ml-2 text-gray-700 font-medium">Oui</span>
              </label>
              <label className="inline-flex items-center bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200 transition">
                <input
                  type="radio"
                  name="canWrite"
                  value="no"
                  onChange={handleChange}
                  disabled={isViewMode}
                  className="form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
                />
                <span className="ml-2 text-gray-700 font-medium">Non</span>
              </label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
