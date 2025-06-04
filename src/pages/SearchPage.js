import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageContainer } from '../components/layout/PageContainer';
import { SearchForm } from '../components/search/SearchForm';
import { SearchResults } from '../components/search/SearchResults';
const SearchPage = () => {
    return (_jsxs(PageContainer, { title: "Recherche de formulaires", description: "Recherchez des participants par nom, commune, niveau d'\u00E9ducation, ou m\u00E9tier souhait\u00E9.", children: [_jsx(SearchForm, {}), _jsx(SearchResults, {})] }));
};
export default SearchPage;
