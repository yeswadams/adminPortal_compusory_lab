import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <p className="text-xl text-gray-600 mb-4">Please log in to view your profile.</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-[#6a2c20] text-white px-6 py-2 rounded hover:bg-[#5a251b] transition-colors"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-stone-100">
        <div className="bg-[#6a2c20] h-32 flex items-end justify-center pb-0">
          <div className="w-24 h-24 bg-white rounded-full border-4 border-white translate-y-12 flex items-center justify-center text-[#6a2c20] text-3xl font-bold shadow-md">
            {user.name?.[0]?.toUpperCase() || "A"}
          </div>
        </div>
        <div className="pt-16 pb-8 px-8 text-center">
          <h1 className="text-2xl font-bold text-[#101316] mb-1 capitalize">
            {user.name}
          </h1>
          <p className="text-gray-500 mb-6">{user.email}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">Role</p>
              <p className="font-medium">Administrator</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">Status</p>
              <p className="font-medium text-green-600">Active</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/admin")}
              className="px-6 py-2 border border-[#6a2c20] text-[#6a2c20] rounded hover:bg-[#6a2c20] hover:text-white transition-colors"
            >
              Back to Portal
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
