import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="text-center p-10 bg-white rounded-lg shadow-xl max-w-lg mx-auto">
      <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h2 className="text-3xl font-bold mt-4 text-gray-800">Booking Confirmed!</h2>
      <p className="text-gray-600 mt-2 text-lg">
        Thank you! Your service has been successfully booked. You can view all your bookings on your dashboard.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <Link to="/dashboard" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Go to Dashboard
        </Link>
        <Link to="/" className="bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300">
          Book Another Service
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
