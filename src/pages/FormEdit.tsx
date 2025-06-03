import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { FormTabs } from '../components/form/FormTabs';
import { Button } from '../components/ui/Button';
import { Alert } from '../components/ui/Alert';
import { useFormStore } from '../store/formStore';
import { FormData } from '../types';
import { Save, ArrowLeft } from 'lucide-react';

const FormEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getForm, updateForm, isLoading } = useFormStore();
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    if (id) {
      const form = getForm(id);
      if (form) {
        setFormData(form);
      }
      setIsLoaded(true);
    }
  }, [id, getForm]);
  
  const handleChange = (data: Partial<FormData>) => {
    setFormData(prev => ({
      ...prev,
      ...data
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!id) return;
    
    // Simple validation
    const { participant, familyInfo, professionalBackground } = formData;
    
    if (!participant?.firstName || !participant?.lastName || !participant?.birthDate || 
        !participant?.address?.commune || !participant?.contact || !participant?.educationLevel) {
      setError("Veuillez remplir tous les champs obligatoires des informations personnelles.");
      return;
    }
    
    if (!familyInfo?.fatherName || !familyInfo?.fatherContact || 
        !familyInfo?.motherName || !familyInfo?.motherContact ||
        !familyInfo?.maritalStatus || !familyInfo?.familyStatus) {
      setError("Veuillez remplir tous les champs obligatoires des informations familiales.");
      return;
    }
    
    if (!professionalBackground?.desiredJob) {
      setError("Veuillez sélectionner un métier souhaité.");
      return;
    }
    
    try {
      updateForm(id, formData);
      navigate(`/forms/${id}`);
    } catch (err) {
      setError("Une erreur est survenue lors de la mise à jour du formulaire.");
    }
  };
  
  if (!isLoaded) {
    return (
      <PageContainer>
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </PageContainer>
    );
  }
  
  if (isLoaded && Object.keys(formData).length === 0) {
    return (
      <PageContainer>
        <Alert variant="error" title="Erreur">
          Le formulaire demandé n'existe pas.
        </Alert>
        <div className="mt-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            icon={<ArrowLeft size={16} />}
          >
            Retour
          </Button>
        </div>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer
      title={`Modifier: ${formData.participant?.lastName} ${formData.participant?.firstName}`}
      description={`ID: ${id}`}
    >
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          icon={<ArrowLeft size={16} />}
        >
          Retour
        </Button>
      </div>
      
      {error && (
        <Alert variant="error" title="Erreur" className="mb-6">
          {error}
        </Alert>
      )}
      
      <form onSubmit={handleSubmit}>
        <FormTabs formData={formData} onChange={handleChange} />
        
        <div className="mt-8 flex justify-end">
          <Button
            type="submit"
            isLoading={isLoading}
            icon={<Save size={18} />}
          >
            Enregistrer les modifications
          </Button>
        </div>
      </form>
    </PageContainer>
  );
};

export default FormEdit;