import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
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
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
            >
              {theme === "light" ? "Mode Sombre" : "Mode Clair"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
