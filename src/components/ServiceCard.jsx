import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <Link
      to={`/service/${service.id}`}
      className="group block bg-gradient-to-br from-blue-50 via-white to-pink-100 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-400 border-2 border-blue-100 relative"
    >
      <div className="relative">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-52 object-cover rounded-t-2xl group-hover:brightness-90 transition duration-300"
        />
        <div className="absolute top-3 right-3 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
          {service.category}
        </div>
        <div className="absolute bottom-3 left-3 bg-white/80 px-3 py-1 rounded-full text-sm font-semibold text-blue-700 shadow">
          {service.rating} <span className="text-yellow-500">★</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-extrabold text-blue-700 mb-2 truncate group-hover:text-pink-600 transition">
          {service.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
            ${service.price}
          </span>
          <button
            className="bg-gradient-to-r from-blue-500 to-pink-400 text-white font-semibold px-4 py-2 rounded-xl shadow hover:from-blue-600 hover:to-pink-500 transition duration-200"
            onClick={e => e.preventDefault()}
          >
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
