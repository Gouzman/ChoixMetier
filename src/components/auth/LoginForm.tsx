import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Alert } from '../ui/Alert';
import { User, Lock } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login, isLoading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (error) {
      // Error is handled by the store
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm space-y-4">
        <Input
          id="username"
          name="username"
          type="text"
          label="Nom d'utilisateur"
          required
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon={<User size={18} />}
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Mot de passe"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<Lock size={18} />}
        />
      </div>

      {error && (
        <Alert variant="error" title="Erreur de connexion">
          {error}
        </Alert>
      )}

      <div>
        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full"
        >
          Se connecter
        </Button>
      </div>
      
      <div className="text-center text-sm">
        <p className="text-gray-600">
          Pour la démo: <br />
          Admin: <code className="bg-gray-100 px-1 rounded">admin</code> / <code className="bg-gray-100 px-1 rounded">password</code> <br />
          Opérateur: <code className="bg-gray-100 px-1 rounded">operator</code> / <code className="bg-gray-100 px-1 rounded">password</code>
        </p>
      </div>
    </form>
  );
};