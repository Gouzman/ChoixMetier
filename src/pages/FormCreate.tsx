import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { FormTabs } from "../components/form/FormTabs";
import { Button } from "../components/ui/Button";
import { Alert } from "../components/ui/Alert";
import { useFormStore } from "../store/formStore";
import { FormData } from "../types";
import { Save, ArrowLeft } from "lucide-react";

const FormCreate: React.FC = () => {
  const navigate = useNavigate();
  const { createForm, isLoading } = useFormStore();
  const [formData, setFormData] = useState<Partial<FormData>>({
    participant: {},
    familyInfo: {},
    professionalBackground: {
      previousJobs: [],
    },
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (data: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simple validation
    const { participant, familyInfo, professionalBackground } = formData;

    if (
      !participant?.firstName ||
      !participant?.lastName ||
      !participant?.birthDate ||
      !participant?.address?.commune ||
      !participant?.contact ||
      !participant?.educationLevel
    ) {
      setError(
        "Veuillez remplir tous les champs obligatoires des informations personnelles."
      );
      return;
    }

    if (
      !familyInfo?.fatherName ||
      !familyInfo?.fatherContact ||
      !familyInfo?.motherName ||
      !familyInfo?.motherContact ||
      !familyInfo?.maritalStatus ||
      !familyInfo?.familyStatus
    ) {
      setError(
        "Veuillez remplir tous les champs obligatoires des informations familiales."
      );
      return;
    }

    if (!professionalBackground?.desiredJob) {
      setError("Veuillez sélectionner un métier souhaité.");
      return;
    }

    try {
      createForm(formData as any);
      navigate("/search");
    } catch (err) {
      if (err instanceof Error) {
        setError(`Une erreur est survenue : ${err.message}`);
      } else {
        setError(
          "Une erreur inconnue est survenue lors de la création du formulaire."
        );
      }
    }
  };

  return (
    <PageContainer
      title="Nouveau formulaire"
      description="Saisissez les informations du participant."
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
          <Button type="submit" isLoading={isLoading} icon={<Save size={18} />}>
            Enregistrer
          </Button>
        </div>
      </form>
    </PageContainer>
  );
};

export default FormCreate;
