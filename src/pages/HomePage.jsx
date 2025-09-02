import { useState } from 'react';
import servicesData from '../data/services.json';
import ServiceCard from '../components/ServiceCard';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(servicesData.map(s => s.category))];

  const filteredServices = servicesData
    .filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(service =>
      category === 'All' || service.category === category
    );

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Find the Perfect Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Search for services (e.g., Cleaning)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.length > 0 ? (
          filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full text-xl mt-8">No services found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
