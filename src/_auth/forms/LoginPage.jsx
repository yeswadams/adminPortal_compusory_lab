import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for a beginner-friendly approach
    if (email && password) {
      // For this lab, any email/password works
      login({ email, name: email.split('@')[0] });
      navigate('/admin');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#6a2c20] focus:border-transparent outline-none"
          placeholder="admin@coffee.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#6a2c20] focus:border-transparent outline-none"
          placeholder="••••••••"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#6a2c20] text-white py-2 rounded font-medium hover:bg-[#5a251b] transition-colors"
      >
        Sign In
      </button>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Demo: Use any email and password
        </p>
      </div>
    </form>
  );
};

export default LoginPage;