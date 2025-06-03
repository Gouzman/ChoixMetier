import React from 'react';
import { Link } from 'react-router-dom';
import { User, LogOut, Menu, X } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const { user, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-md">
                <User size={20} />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">GestionMétiers</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-4">
            {user && (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Tableau de bord
                </Link>
                <Link to="/search" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Recherche
                </Link>
                <Link to="/forms/new" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Nouveau formulaire
                </Link>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    Administration
                  </Link>
                )}
                <div className="ml-4 flex items-center">
                  <span className="text-sm text-gray-700 mr-4">
                    {user.name} ({user.role === 'admin' ? 'Administrateur' : 'Opérateur'})
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={logout}
                    icon={<LogOut size={16} />}
                  >
                    Déconnexion
                  </Button>
                </div>
              </>
            )}
            {!user && (
              <Link to="/login">
                <Button variant="primary" size="sm">
                  Connexion
                </Button>
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
            {user && (
              <>
                <Link 
                  to="/dashboard" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tableau de bord
                </Link>
                <Link 
                  to="/search" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Recherche
                </Link>
                <Link 
                  to="/forms/new" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nouveau formulaire
                </Link>
                {user.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Administration
                  </Link>
                )}
                <div className="px-3 py-2 flex flex-col">
                  <span className="text-sm text-gray-700 mb-2">
                    {user.name} ({user.role === 'admin' ? 'Administrateur' : 'Opérateur'})
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    icon={<LogOut size={16} />}
                  >
                    Déconnexion
                  </Button>
                </div>
              </>
            )}
            {!user && (
              <Link 
                to="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="primary" size="sm" className="w-full">
                  Connexion
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};