import React from "react";
import { Tabs, TabList, TabTrigger, TabContent } from "../ui/Tabs";
import { FormPersonalInfo } from "./FormPersonalInfo";
import { FormFamilyInfo } from "./FormFamilyInfo";
import { FormProfessionalInfo } from "./FormProfessionalInfo";
import { FormProfessionalDetails } from "./FormProfessionalDetails";
import { FormSchoolReturn } from "./FormSchoolReturn";
import { FormData, ProfessionalBackground } from "../../types";

interface FormTabsProps {
  formData: Partial<FormData>;
  onChange: (data: Partial<FormData>) => void;
  isViewMode?: boolean;
}

export const FormTabs: React.FC<FormTabsProps> = ({
  formData,
  onChange,
  isViewMode = false,
}) => {
  return (
    <Tabs defaultValue="personal" className="w-full">
      <TabList>
        <TabTrigger value="personal">Informations personnelles</TabTrigger>
        <TabTrigger value="family">Informations familiales</TabTrigger>
        <TabTrigger value="professional">Parcours professionnel</TabTrigger>
        <TabTrigger value="professionalDetails">
          Détails professionnels
        </TabTrigger>
        <TabTrigger value="schoolReturn">Retour à l'école</TabTrigger>
      </TabList>

      <TabContent value="personal">
        <FormPersonalInfo
          data={formData.participant || {}}
          onChange={(participant) =>
            onChange({
              participant: { ...formData.participant, ...participant },
            })
          }
          isViewMode={isViewMode}
        />
      </TabContent>

      <TabContent value="family">
        <FormFamilyInfo
          data={formData.familyInfo || {}}
          onChange={(familyInfo) =>
            onChange({ familyInfo: { ...formData.familyInfo, ...familyInfo } })
          }
          isViewMode={isViewMode}
        />
      </TabContent>

      <TabContent value="professional">
        <FormProfessionalInfo
          data={formData.professionalBackground || {}}
          onChange={(professionalBackground: Partial<ProfessionalBackground>) =>
            onChange({
              professionalBackground: {
                ...formData.professionalBackground,
                ...professionalBackground,
              },
            })
          }
          isViewMode={isViewMode}
        />
      </TabContent>

      <TabContent value="professionalDetails">
        <FormProfessionalDetails
          data={formData.professionalDetails ?? {}}
          onChange={(professionalDetails) =>
            onChange({
              professionalDetails: {
                ...formData.professionalDetails,
                ...professionalDetails,
              },
            })
          }
          isViewMode={isViewMode}
        />
      </TabContent>

      <TabContent value="schoolReturn">
        <FormSchoolReturn
          data={formData.schoolReturn ?? {}}
          onChange={(schoolReturn) =>
            onChange({
              schoolReturn: {
                ...formData.schoolReturn,
                ...schoolReturn,
              },
            })
          }
          isViewMode={isViewMode}
        />
      </TabContent>
    </Tabs>
  );
};
