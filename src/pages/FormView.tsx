import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { FormTabs } from "../components/form/FormTabs";
import { Button } from "../components/ui/Button";
import { Alert } from "../components/ui/Alert";
import { useFormStore } from "../store/formStore";
import { ArrowLeft, Edit } from "lucide-react";

const FormView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getForm, setCurrentForm, currentForm } = useFormStore();

  useEffect(() => {
    if (id) {
      setCurrentForm(id);
    }

    return () => {
      setCurrentForm(null);
    };
  }, [id, setCurrentForm]);

  if (!currentForm && id) {
    const form = getForm(id);
    if (!form) {
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
  }

  if (!currentForm) {
    return (
      <PageContainer>
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title={`${currentForm.participant.lastName} ${currentForm.participant.firstName}`}
      description={`ID: ${currentForm.participant.id} | Métier souhaité: ${currentForm.professionalBackground.desiredJob}`}
    >
      <div className="mb-6 flex flex-wrap gap-2 justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          icon={<ArrowLeft size={16} />}
        >
          Retour
        </Button>

        <Button
          variant="outline"
          onClick={() => navigate(`/forms/${id}/edit`)}
          icon={<Edit size={16} />}
        >
          Modifier
        </Button>
      </div>

      <FormTabs formData={currentForm} onChange={() => {}} isViewMode={true} />
    </PageContainer>
  );
};

export default FormView;
