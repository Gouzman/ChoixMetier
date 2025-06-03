import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { SearchForm } from '../components/search/SearchForm';
import { SearchResults } from '../components/search/SearchResults';

const SearchPage: React.FC = () => {
  return (
    <PageContainer
      title="Recherche de formulaires"
      description="Recherchez des participants par nom, commune, niveau d'éducation, ou métier souhaité."
    >
      <SearchForm />
      <SearchResults />
    </PageContainer>
  );
};

export default SearchPage;