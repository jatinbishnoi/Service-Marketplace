import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useBookings } from '../context/BookingContext.jsx';

const Layout = () => {
  const { bookedServices } = useBookings();
  const bookingCount = bookedServices ? bookedServices.length : 0;
  const navigate = useNavigate();

  // Get user info from localStorage (set after signin)
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-pink-200 via-blue-100 to-yellow-100 animate-gradient-x"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400 via-pink-300 to-blue-300 opacity-30 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-yellow-300 via-green-200 to-blue-200 opacity-30 rounded-full blur-2xl animate-pulse"></div>
      </div>
      <header className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 shadow-2xl sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center rounded-b-3xl backdrop-blur-lg bg-white/10 border-b-2 border-blue-300">
          <Link
            to="/"
            className="flex items-center gap-2 text-3xl font-extrabold text-white tracking-wide hover:text-yellow-300 transition-colors drop-shadow-lg"
          >
            <span className="inline-block align-middle">
              <svg className="w-9 h-9 text-yellow-300 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" fill="#fde68a" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" stroke="#2563eb"/>
              </svg>
            </span>
            <span className="bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">ServiceHub</span>
          </Link>
          <div className="flex items-center space-x-2 md:space-x-6">
            <Link
              to="/"
              className="relative text-white hover:bg-blue-800 px-5 py-2 rounded-full font-semibold transition duration-200 shadow-lg hover:scale-105"
            >
              Home
              <span className="absolute -top-2 -right-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
            </Link>
            <Link
              to="/dashboard"
              className="relative text-white hover:bg-blue-800 px-5 py-2 rounded-full font-semibold transition duration-200 shadow-lg hover:scale-105 flex items-center"
            >
              Dashboard
              {bookingCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow animate-bounce">
                  {bookingCount}
                </span>
              )}
            </Link>
            {/* Show user name if logged in */}
            {user && (
              <span className="hidden md:inline-block bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 text-blue-700 font-bold px-5 py-2 rounded-full shadow border-2 border-blue-300 animate-fade-in">
                <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                {user.name}
              </span>
            )}
            <button
              onClick={handleLogout}
              className="ml-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-5 py-2 rounded-full transition duration-200 shadow-lg border-2 border-red-200 animate-fade-in hover:scale-105"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 py-8 relative z-10">
        <Outlet />
      </main>

      <footer className="bg-gradient-to-r from-blue-100 to-pink-100 text-center py-4 mt-8 shadow-inner">
        <p className="text-gray-600 font-semibold tracking-wide">&copy; 2025 ServiceHub. All rights reserved.</p>
      </footer>

      {/* Custom Tailwind animations */}
      <style>
        {`
          .animate-gradient-x {
            animation: gradient-x 8s ease-in-out infinite alternate;
          }
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-spin-slow {
            animation: spin 18s linear infinite;
          }
          .animate-fade-in {
            animation: fadeIn 1.2s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Layout;

