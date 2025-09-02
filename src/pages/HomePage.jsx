import { useState, useEffect } from 'react';
import servicesData from '../data/services.json';
import ServiceCard from '../components/ServiceCard';

// Some beautiful gradient sets
const gradients = [
  {
    main: "bg-gradient-to-br from-pink-100 via-blue-50 to-yellow-100",
    blob1: "bg-gradient-to-tr from-purple-400 via-pink-300 to-blue-300",
    blob2: "bg-gradient-to-br from-yellow-300 via-green-200 to-blue-200",
    blob3: "bg-gradient-to-br from-blue-300 via-pink-200 to-yellow-200"
  },
  {
    main: "bg-gradient-to-br from-green-100 via-blue-50 to-pink-100",
    blob1: "bg-gradient-to-tr from-blue-400 via-green-300 to-pink-300",
    blob2: "bg-gradient-to-br from-pink-300 via-yellow-200 to-green-200",
    blob3: "bg-gradient-to-br from-yellow-200 via-blue-200 to-green-100"
  },
  {
    main: "bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100",
    blob1: "bg-gradient-to-tr from-pink-400 via-yellow-300 to-blue-300",
    blob2: "bg-gradient-to-br from-blue-300 via-green-200 to-pink-200",
    blob3: "bg-gradient-to-br from-green-300 via-yellow-200 to-pink-100"
  }
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [gradientIdx, setGradientIdx] = useState(0);

  // Change background every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIdx(idx => (idx + 1) % gradients.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const categories = ['All', ...new Set(servicesData.map(s => s.category))];

  const filteredServices = servicesData
    .filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(service =>
      category === 'All' || service.category === category
    );

  const gradient = gradients[gradientIdx];

  return (
    <div className="min-h-screen relative overflow-hidden transition-all duration-1000">
      {/* Dynamic animated background */}
      <div className="absolute inset-0 -z-10 transition-all duration-1000">
        <div className={`w-full h-full ${gradient.main} animate-gradient-x`}></div>
        <div className={`absolute top-0 left-0 w-96 h-96 ${gradient.blob1} opacity-30 rounded-full blur-3xl animate-spin-slow`}></div>
        <div className={`absolute bottom-0 right-0 w-72 h-72 ${gradient.blob2} opacity-30 rounded-full blur-2xl animate-pulse`}></div>
        <div className={`absolute top-1/2 left-1/2 w-80 h-80 ${gradient.blob3} opacity-20 rounded-full blur-2xl animate-spin-slow`}></div>
      </div>
      <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-8 mb-12 border border-blue-100 mt-10">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-700 text-center tracking-tight drop-shadow-lg">
          Find the Perfect Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="🔍 Search for services (e.g., Cleaning)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-lg shadow-sm bg-gradient-to-r from-blue-50 to-pink-50"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-lg shadow-sm bg-gradient-to-r from-yellow-50 to-blue-50"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.length > 0 ? (
            filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <svg className="w-16 h-16 text-blue-300 mb-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2a4 4 0 118 0v2m-4 4v-4m0 0V7m0 0a4 4 0 00-8 0v2m8-2a4 4 0 018 0v2" />
              </svg>
              <p className="text-center text-blue-500 text-2xl font-semibold">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
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
        `}
      </style>
    </div>
  );
};

export default HomePage;
