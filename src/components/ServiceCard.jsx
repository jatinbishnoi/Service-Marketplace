import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <Link to={`/service/${service.id}`} className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500">{service.category}</p>
        <h3 className="text-lg font-semibold text-gray-800 truncate mt-1">{service.name}</h3>
        <div className="flex justify-between items-center mt-3">
          <p className="text-xl font-bold text-blue-600">${service.price}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-gray-700 font-semibold">{service.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
