import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import RootLayout from './_root/RootLayout.jsx'
import HomePage from './_root/pages/HomePage.jsx'
import Shop from './_root/pages/Shop.jsx'
import AdminPortal from './_root/pages/AdminPortal.jsx'
import AdminProfile from './_root/pages/AdminProfile.jsx'
import AuthLayout from './_auth/AuthLayout.jsx'
import LoginPage from './_auth/forms/LoginPage.jsx'
import './App.css'

// Helper component for protected routes
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      {/* Public & Private Routes under RootLayout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        
        {/* Protected Admin Routes */}
        <Route 
          path="admin" 
          element={
            <ProtectedRoute>
              <AdminPortal />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="admin/profile" 
          element={
            <ProtectedRoute>
              <AdminProfile />
            </ProtectedRoute>
          } 
        />
      </Route>

      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      
      {/* 404 Route */}
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default App
