import React, { useState } from "react";
import { ProfessionalBackground } from "../../types";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Plus, Trash2 } from "lucide-react";
import { jobs } from "../../data/mockData";

interface FormProfessionalInfoProps {
  data?: Partial<ProfessionalBackground>;
  onChange: (data: Partial<ProfessionalBackground>) => void;
  isViewMode?: boolean;
}

export const FormProfessionalInfo: React.FC<FormProfessionalInfoProps> = ({
  data = {},
  onChange,
  isViewMode = false,
}) => {
  const [previousJobs, setPreviousJobs] = useState(data.previousJobs || []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const handleAddJob = () => {
    const newJobs = [
      ...previousJobs,
      { title: "", duration: "", description: "" },
    ];
    setPreviousJobs(newJobs);
    onChange({ ...data, previousJobs: newJobs });
  };

  const handleRemoveJob = (index: number) => {
    const newJobs = [...previousJobs];
    newJobs.splice(index, 1);
    setPreviousJobs(newJobs);
    onChange({ ...data, previousJobs: newJobs });
  };

  const handleJobChange = (index: number, field: string, value: string) => {
    const newJobs = [...previousJobs];
    newJobs[index] = { ...newJobs[index], [field]: value };
    setPreviousJobs(newJobs);
    onChange({ ...data, previousJobs: newJobs });
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Expérience professionnelle
            </h3>
            {previousJobs.map((job, index) => (
              <div
                key={index}
                className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Titre du poste"
                    value={job.title}
                    onChange={(e) =>
                      handleJobChange(index, "title", e.target.value)
                    }
                    disabled={isViewMode}
                    required
                  />

                  <Input
                    label="Durée"
                    value={job.duration}
                    onChange={(e) =>
                      handleJobChange(index, "duration", e.target.value)
                    }
                    placeholder="Ex: 2 ans, 6 mois"
                    disabled={isViewMode}
                    required
                  />

                  <div className="md:col-span-2">
                    <Input
                      label="Description"
                      value={job.description ?? ""}
                      onChange={(e) =>
                        handleJobChange(index, "description", e.target.value)
                      }
                      disabled={isViewMode}
                    />
                  </div>
                </div>

                {!isViewMode && (
                  <button
                    type="button"
                    onClick={() => handleRemoveJob(index)}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors"
                    aria-label="Supprimer cette expérience"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            ))}

            {!isViewMode && (
              <Button
                type="button"
                variant="outline"
                onClick={handleAddJob}
                className="mt-2"
                icon={<Plus size={18} />}
              >
                Ajouter une expérience
              </Button>
            )}

            {previousJobs.length === 0 && isViewMode && (
              <p className="text-gray-500 italic">
                Aucune expérience professionnelle renseignée.
              </p>
            )}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Métier souhaité
            </h3>
            <div className="max-w-md">
              <Select
                label="Métier visé pour la formation"
                name="desiredJob"
                value={data.desiredJob ?? ""}
                onChange={handleChange}
                options={jobs.map((job) => ({ value: job, label: job }))}
                required
                disabled={isViewMode}
              />

              {isViewMode && !data.desiredJob && (
                <p className="text-gray-500 italic mt-2">
                  Aucun métier souhaité renseigné.
                </p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
