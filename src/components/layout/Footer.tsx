import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} GestionMétiers. Tous droits réservés.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500 text-center md:text-right">
              Version 1.0.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};