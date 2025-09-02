import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-100 px-4">
      <div className="text-center p-12 bg-white rounded-3xl shadow-2xl max-w-lg w-full border border-green-100">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4 shadow-lg">
            <svg className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h2 className="text-4xl font-extrabold mt-4 text-green-700 mb-2 tracking-tight">Booking Confirmed!</h2>
        <p className="text-gray-600 mt-2 text-lg mb-8">
          Thank you! Your service has been successfully booked.<br />
          You can view all your bookings on your dashboard.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/dashboard"
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 px-8 rounded-xl shadow hover:from-blue-700 hover:to-blue-600 transition duration-300 text-lg"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/"
            className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-xl shadow hover:from-gray-300 hover:to-gray-400 transition duration-300 text-lg"
          >
            Book Another Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
