import { useBookings } from '/src/context/BookingContext.jsx';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { bookedServices } = useBookings();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Bookings</h1>
      {bookedServices.length > 0 ? (
        <div className="space-y-4">
          {bookedServices.map((service) => (
            <div key={service.bookingId} className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-between transition hover:shadow-lg">
              <div className="flex items-center mb-4 sm:mb-0">
                <img src={service.image} alt={service.name} className="w-24 h-24 rounded-md object-cover mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                  <p className="text-gray-500">{service.category}</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-blue-600">${service.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">No Bookings Yet</h2>
          <p className="mb-4">You haven't booked any services. Explore our services to get started!</p>
          <Link to="/" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Explore Services
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;

