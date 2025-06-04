import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { useFormStore } from '../../store/formStore';
import { communes, educationLevels, nationalities, jobs } from '../../data/mockData';
import { Search as SearchIcon, X } from 'lucide-react';
export const SearchForm = () => {
    const { searchForms, isLoading } = useFormStore();
    const [filter, setFilter] = useState({
        query: '',
        commune: '',
        educationLevel: '',
        nationality: '',
        desiredJob: '',
    });
    const [showAdvanced, setShowAdvanced] = useState(false);
    const handleSearch = (e) => {
        e.preventDefault();
        searchForms(filter);
    };
    const handleChange = (e) => {
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
    return (_jsxs("form", { onSubmit: handleSearch, className: "mb-6", children: [_jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-4", children: [_jsx("div", { className: "flex-1", children: _jsx(Input, { name: "query", value: filter.query, onChange: handleChange, placeholder: "Rechercher par nom, pr\u00E9nom, ID...", icon: _jsx(SearchIcon, { size: 18 }) }) }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { type: "submit", isLoading: isLoading, children: "Rechercher" }), _jsx(Button, { type: "button", variant: "outline", onClick: () => setShowAdvanced(!showAdvanced), children: showAdvanced ? 'Masquer' : 'Filtres avancés' }), Object.values(filter).some(v => v !== '') && (_jsx(Button, { type: "button", variant: "ghost", onClick: handleReset, icon: _jsx(X, { size: 18 }), children: "R\u00E9initialiser" }))] })] }), showAdvanced && (_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-md border border-gray-200 animate-fadeIn", children: [_jsx(Select, { name: "commune", label: "Commune", value: filter.commune, onChange: handleChange, options: communes.map(commune => ({ value: commune, label: commune })) }), _jsx(Select, { name: "educationLevel", label: "Niveau scolaire", value: filter.educationLevel, onChange: handleChange, options: educationLevels.map(level => ({ value: level, label: level })) }), _jsx(Select, { name: "nationality", label: "Nationalit\u00E9", value: filter.nationality, onChange: handleChange, options: nationalities.map(nationality => ({ value: nationality, label: nationality })) }), _jsx(Select, { name: "desiredJob", label: "M\u00E9tier souhait\u00E9", value: filter.desiredJob, onChange: handleChange, options: jobs.map(job => ({ value: job, label: job })) })] }))] }));
};
