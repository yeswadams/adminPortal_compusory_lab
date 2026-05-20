import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import RootLayout from "./_root/RootLayout.jsx";
import HomePage from "./_root/pages/HomePage.jsx";
import Shop from "./_root/pages/Shop.jsx";
import AdminPortal from "./_root/pages/AdminPortal.jsx";
import AdminProfile from "./_root/pages/AdminProfile.jsx";
import AuthLayout from "./_auth/AuthLayout.jsx";
import LoginPage from "./_auth/forms/LoginPage.jsx";
import "./App.css";

// Component for handling protected routes
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const Link = ({ href, children }) => {
  return (
    <a
      href={href}
      className="mt-4 text-lg flex items-center justify-center px-4 py-2 bg-[#6a2c20] rounded-lg text-white"
    >
      {children}
    </a>
  );
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
      <Route
        path="*"
        element={
          <div className="flex flex-col text-black h-screen items-center justify-center text-5xl">
            404
            <p className="text-lg">Page Not Found</p>
            <Link href="/">Return To Home Page</Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
