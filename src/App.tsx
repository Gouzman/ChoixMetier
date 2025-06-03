import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import { AuthLayout } from './components/layout/AuthLayout';
import { AppLayout } from './components/layout/AppLayout';

// Dynamically import pages for better code splitting
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const FormCreate = React.lazy(() => import('./pages/FormCreate'));
const FormView = React.lazy(() => import('./pages/FormView'));
const FormEdit = React.lazy(() => import('./pages/FormEdit'));
const AdminPage = React.lazy(() => import('./pages/AdminPage'));

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          {/* Auth routes */}
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Navigate to="/login\" replace />} />
            <Route path="login" element={<LoginForm />} />
          </Route>
          
          {/* App routes */}
          <Route path="/" element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="forms/new" element={<FormCreate />} />
            <Route path="forms/:id" element={<FormView />} />
            <Route path="forms/:id/edit" element={<FormEdit />} />
            <Route path="admin" element={<AdminPage />} />
          </Route>
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/dashboard\" replace />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;