import React, { useState, useEffect } from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { useFormStore } from '../../store/formStore';
import { SearchFilter } from '../../types';
import { communes, educationLevels, nationalities, jobs } from '../../data/mockData';
import { Search as SearchIcon, X } from 'lucide-react';

export const SearchForm: React.FC = () => {
  const { searchForms, isLoading } = useFormStore();
  const [filter, setFilter] = useState<SearchFilter>({
    query: '',
    commune: '',
    educationLevel: '',
    nationality: '',
    desiredJob: '',
  });
  
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchForms(filter);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter(prev => ({ ...prev, [name]: value }));
  };
  
  const handleReset = () => {
    setFilter({
      query: '',
      commune: '',
      educationLevel: '',
      nationality: '',
      desiredJob: '',
    });
    searchForms({ query: '' });
  };
  
  useEffect(() => {
    // Initial search with empty query to load all data
    searchForms({ query: '' });
  }, [searchForms]);
  
  return (
    <form onSubmit={handleSearch} className="mb-6">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <Input
            name="query"
            value={filter.query}
            onChange={handleChange}
            placeholder="Rechercher par nom, prénom, ID..."
            icon={<SearchIcon size={18} />}
          />
        </div>
        <div className="flex gap-2">
          <Button
            type="submit"
            isLoading={isLoading}
          >
            Rechercher
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            {showAdvanced ? 'Masquer' : 'Filtres avancés'}
          </Button>
          {Object.values(filter).some(v => v !== '') && (
            <Button
              type="button"
              variant="ghost"
              onClick={handleReset}
              icon={<X size={18} />}
            >
              Réinitialiser
            </Button>
          )}
        </div>
      </div>
      
      {showAdvanced && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-md border border-gray-200 animate-fadeIn">
          <Select
            name="commune"
            label="Commune"
            value={filter.commune}
            onChange={handleChange}
            options={communes.map(commune => ({ value: commune, label: commune }))}
          />
          
          <Select
            name="educationLevel"
            label="Niveau scolaire"
            value={filter.educationLevel}
            onChange={handleChange}
            options={educationLevels.map(level => ({ value: level, label: level }))}
          />
          
          <Select
            name="nationality"
            label="Nationalité"
            value={filter.nationality}
            onChange={handleChange}
            options={nationalities.map(nationality => ({ value: nationality, label: nationality }))}
          />
          
          <Select
            name="desiredJob"
            label="Métier souhaité"
            value={filter.desiredJob}
            onChange={handleChange}
            options={jobs.map(job => ({ value: job, label: job }))}
          />
        </div>
      )}
    </form>
  );
};