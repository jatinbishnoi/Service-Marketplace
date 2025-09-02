import { useBookings } from '../context/BookingContext.jsx';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { bookedServices, removeBooking } = useBookings();

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900 text-center tracking-tight">My Bookings</h1>
      {bookedServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bookedServices.map((service) => (
            <div
              key={service.bookingId}
              className="bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6 rounded-2xl shadow-xl flex flex-col justify-between border border-blue-200 hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-28 h-28 rounded-xl object-cover mr-6 border-4 border-blue-200 shadow"
                />
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-1">{service.name}</h3>
                  <p className="text-blue-500 font-medium mb-2">{service.category}</p>
                  {service.userInfo && (
                    <div className="mt-2 text-sm text-gray-700 space-y-1">
                      <div>
                        <span className="font-semibold text-blue-600">Name:</span> {service.userInfo.name}
                      </div>
                      <div>
                        <span className="font-semibold text-blue-600">Email:</span> {service.userInfo.email}
                      </div>
                      <div>
                        <span className="font-semibold text-blue-600">Phone:</span> {service.userInfo.phone}
                      </div>
                      <div>
                        <span className="font-semibold text-blue-600">Address:</span> {service.userInfo.address}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-3xl font-extrabold text-blue-600">${service.price}</p>
                <button
                  onClick={() => removeBooking(service.bookingId)}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-6 rounded-xl shadow hover:scale-105 hover:from-red-600 hover:to-red-700 transition font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 bg-white p-12 rounded-2xl shadow-xl max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">No Bookings Yet</h2>
          <p className="mb-6 text-lg">You haven't booked any services. Explore our services to get started!</p>
          <Link
            to="/"
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-700 hover:to-blue-600 transition duration-300 shadow"
          >
            Explore Services
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;

