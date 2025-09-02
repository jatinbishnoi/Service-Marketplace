import { useParams, useNavigate } from 'react-router-dom';
import servicesData from '/src/data/services.json';
import { useBookings } from '/src/context/BookingContext.jsx';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addBooking } = useBookings();
  const service = servicesData.find(s => s.id === parseInt(id));

  if (!service) {
    return <div className="text-center text-2xl font-bold mt-10">Service not found!</div>;
  }

  const handleBooking = () => {
    addBooking(service);
    navigate('/confirmation');
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={service.image} alt={service.name} className="w-full h-auto rounded-lg object-cover shadow-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-md text-gray-500 mb-2">{service.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{service.name}</h1>
          <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
          <div className="flex items-center justify-between mb-6">
             <p className="text-4xl font-bold text-blue-600">${service.price}</p>
             <div className="flex items-center text-xl bg-gray-100 px-3 py-1 rounded-full">
                <span className="text-yellow-500 mr-2">★</span>
                <span className="text-gray-800 font-semibold">{service.rating}</span>
              </div>
          </div>
          <button
            onClick={handleBooking}
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 text-lg"
          >
            Book This Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;

