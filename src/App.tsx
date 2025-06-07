import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { LoginForm } from "./components/auth/LoginForm";
import { AuthLayout } from "./components/layout/AuthLayout";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorBoundary } from "./components/error/ErrorBoundary";

// Dynamically import pages for better code splitting
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const FormCreate = React.lazy(() => import("./pages/FormCreate"));
const FormView = React.lazy(() => import("./pages/FormView"));
const FormEdit = React.lazy(() => import("./pages/FormEdit"));
const AdminPage = React.lazy(() => import("./pages/AdminPage"));

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="/login" /> },
      { path: "login", element: <LoginForm /> },
    ],
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "search", element: <SearchPage /> },
      { path: "forms/new", element: <FormCreate /> },
      { path: "forms/:id", element: <FormView /> },
      { path: "forms/:id/edit", element: <FormEdit /> },
      { path: "admin", element: <AdminPage /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </ErrorBoundary>
  );
}

export default App;
