import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();

  // If user is already logged in, redirect them to the admin portal or home
  if (isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f6f7]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md border border-stone-200">
        <div className="flex flex-col items-center mb-6">
          <img src="/favicon.svg" alt="Logo" className="w-12 h-12 mb-2" />
          <h2 className="text-2xl font-bold text-[#6a2c20]">Coffee R Us</h2>
          <p className="text-gray-500">Sign in to your account</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;