import React from "react";
import { Input } from "../ui/Input";
import { Card, CardContent } from "../ui/Card";

export const FormProfessionalDetails: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* SECTION : PROFESSION PASSÉE */}
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            SECTION : PROFESSION PASSÉE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Que faisais-tu comme activité avant de venir sur le centre ?"
              name="pastActivity"
              placeholder="Ex: Cyber criminel, vols, agressions"
            />

            <Input
              label="Avec qui menais-tu cette activité ?"
              name="activityPartners"
              placeholder="Ex: Mes amis"
            />

            <Input
              label="Où exerçais-tu cette activité ?"
              name="activityLocation"
              placeholder="Ex: Partout sur Abidjan"
            />
          </div>

          {/* SECTION : PROFESSION ACTUELLE */}
          <h3 className="text-lg font-medium text-gray-900 mb-4 mt-8">
            SECTION : PROFESSION ACTUELLE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Quel métier veux-tu exercer à la sortie du centre ?"
              name="desiredProfession"
              placeholder="Ex: Soudure"
            />

            <div>
              <label
                htmlFor="hasExperience"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Est-ce que tu as déjà exercé ce métier ?
              </label>
              <div className="mt-2 space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="hasExperience-yes"
                    name="hasExperience"
                    value="yes"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
                  />
                  <span className="ml-2">Oui</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="hasExperience-no"
                    name="hasExperience"
                    value="no"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
                  />
                  <span className="ml-2">Non</span>
                </label>
              </div>
            </div>

            <Input
              label="Si Oui, combien de temps as-tu exercé ce métier ?"
              name="experienceDuration"
              placeholder="Ex: 7 ans"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
