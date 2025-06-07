import React from "react";
import { Input } from "../ui/Input";
import { Card, CardContent } from "../ui/Card";
import { ProfessionalBackground } from "../../types"; // Ajout de l'import manquant

interface FormProfessionalInfoProps {
  data: Partial<ProfessionalBackground>; // Correction pour inclure la propriété `data`
  onChange: (data: Partial<ProfessionalBackground>) => void;
  isViewMode?: boolean;
}

export const FormProfessionalInfo: React.FC<FormProfessionalInfoProps> = ({
  data,
  onChange,
  isViewMode,
}) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            SECTION : VIE FAMILIALE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Avec qui vivais-tu avant de venir sur le centre ?"
              name="livingBeforeCenter"
              value={data.livingBeforeCenter ?? ""}
              onChange={(e) =>
                onChange({ ...data, livingBeforeCenter: e.target.value })
              }
              placeholder="Entrez votre réponse"
              disabled={isViewMode}
            />

            <div>
              <label
                htmlFor="hasPartner"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                As-tu une femme, une copine ?
              </label>
              <div className="mt-2 space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="hasPartner-yes"
                    name="hasPartner"
                    value="yes"
                    checked={data.hasPartner === "yes"}
                    onChange={(e) =>
                      onChange({ ...data, hasPartner: e.target.value })
                    }
                    className="form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
                    disabled={isViewMode}
                  />
                  <span className="ml-2">Oui</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="hasPartner-no"
                    name="hasPartner"
                    value="no"
                    checked={data.hasPartner === "no"}
                    onChange={(e) =>
                      onChange({ ...data, hasPartner: e.target.value })
                    }
                    className="form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
                    disabled={isViewMode}
                  />
                  <span className="ml-2">Non</span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="hasChildren"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                As-tu des enfants ?
              </label>
              <div className="mt-2 space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="hasChildren-yes"
                    name="hasChildren"
                    value="yes"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
                  />
                  <span className="ml-2">Oui</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="hasChildren-no"
                    name="hasChildren"
                    value="no"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
                  />
                  <span className="ml-2">Non</span>
                </label>
              </div>
            </div>

            <Input
              label="Si Oui Combien ?"
              name="numberOfChildren"
              placeholder="Entrez le nombre"
            />

            <Input
              label="Qui s'occupe de ta famille ?"
              name="familyCaretaker"
              placeholder="Entrez votre réponse"
            />

            <Input
              label="Comment faisais-tu pour vivre ?"
              name="livingMeans"
              placeholder="Ex: Cyber criminalité, Vol, agressions"
            />

            <Input
              label="Vous êtes combien dans votre famille ?"
              name="familySize"
              placeholder="Entrez le nombre"
            />

            <Input
              label="Tu occupes quel Rang ?"
              name="familyRank"
              placeholder="Entrez votre rang"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
