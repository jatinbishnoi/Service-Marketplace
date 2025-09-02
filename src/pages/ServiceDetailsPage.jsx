import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import servicesData from '/src/data/services.json';
import { useBookings } from '/src/context/BookingContext.jsx';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addBooking } = useBookings();
  const service = servicesData.find(s => s.id === parseInt(id));

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  if (!service) {
    return <div className="text-center text-2xl font-bold mt-10">Service not found!</div>;
  }

  const handleOpenForm = () => setShowForm(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking({ ...service, userInfo: form });
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-blue-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center justify-center">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-blue-200"
            />
            <div className="flex items-center justify-center mt-6 space-x-4">
              <span className="text-yellow-500 text-2xl">★</span>
              <span className="text-lg font-semibold text-gray-800">{service.rating}</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{service.category}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-700 leading-tight">{service.name}</h1>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">{service.description}</p>
            <div className="flex items-center justify-between mb-8">
              <p className="text-4xl font-extrabold text-blue-600">${service.price}</p>
            </div>
            {!showForm ? (
              <button
                onClick={handleOpenForm}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-600 hover:scale-105 transition duration-300 text-xl"
              >
                Book This Service
              </button>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-6 bg-blue-50 p-6 rounded-xl shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-lg"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-lg"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-lg"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:from-green-600 hover:to-green-700 hover:scale-105 transition duration-300 text-xl"
                >
                  Confirm Booking
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;

