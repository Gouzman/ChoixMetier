import React from 'react';
import { Tabs, TabList, TabTrigger, TabContent } from '../ui/Tabs';
import { FormPersonalInfo } from './FormPersonalInfo';
import { FormFamilyInfo } from './FormFamilyInfo';
import { FormProfessionalInfo } from './FormProfessionalInfo';
import { FormData } from '../../types';

interface FormTabsProps {
  formData: Partial<FormData>;
  onChange: (data: Partial<FormData>) => void;
  isViewMode?: boolean;
}

export const FormTabs: React.FC<FormTabsProps> = ({ 
  formData, 
  onChange,
  isViewMode = false
}) => {
  return (
    <Tabs defaultValue="personal" className="w-full">
      <TabList>
        <TabTrigger value="personal">
          Informations personnelles
        </TabTrigger>
        <TabTrigger value="family">
          Informations familiales
        </TabTrigger>
        <TabTrigger value="professional">
          Parcours professionnel
        </TabTrigger>
      </TabList>
      
      <TabContent value="personal">
        <FormPersonalInfo 
          data={formData.participant} 
          onChange={(participant) => onChange({ participant })}
          isViewMode={isViewMode}
        />
      </TabContent>
      
      <TabContent value="family">
        <FormFamilyInfo 
          data={formData.familyInfo} 
          onChange={(familyInfo) => onChange({ familyInfo })}
          isViewMode={isViewMode}
        />
      </TabContent>
      
      <TabContent value="professional">
        <FormProfessionalInfo 
          data={formData.professionalBackground} 
          onChange={(professionalBackground) => onChange({ professionalBackground })}
          isViewMode={isViewMode}
        />
      </TabContent>
    </Tabs>
  );
};