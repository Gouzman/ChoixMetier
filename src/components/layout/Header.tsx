import React from "react";
import { Link, useLocation } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { useAuthStore } from "../../store/authStore";

export const Header: React.FC = () => {
  const location = useLocation();
  const logout = useAuthStore((state) => state.logout);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { to: "/dashboard", label: "Tableau de bord" },
    { to: "/search", label: "Recherche" },
    { to: "/forms/new", label: "Nouveau formulaire" },
    { to: "/admin", label: "Administration" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-md">
                <User size={20} />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                GestionMétiers
              </span>
            </Link>

            {/* Navigation principale */}
            <nav className="hidden md:ml-8 md:flex md:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(link.to)
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Actions du côté droit */}
          <div className="flex items-center">
            <button
              onClick={logout}
              className="ml-4 flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <LogOut size={18} className="mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
