import { Outlet, Link } from 'react-router-dom';
import { useBookings } from '../context/BookingContext.jsx';

const Layout = () => {
  // Safely access the booked services from the context
  const { bookedServices } = useBookings();
  const bookingCount = bookedServices ? bookedServices.length : 0;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            ServiceHub
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md">Home</Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md flex items-center">
              Dashboard
              {/* Display a badge with the number of booked services */}
              {bookingCount > 0 && (
                <span className="ml-2 bg-blue-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {bookingCount}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 py-8">
        <Outlet /> {/* Child pages will be rendered here */}
      </main>

      <footer className="bg-gray-100 text-center py-4 mt-8">
        <p className="text-gray-600">&copy; 2025 ServiceHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

