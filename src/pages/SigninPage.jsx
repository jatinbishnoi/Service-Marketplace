import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    // Simulate successful signin and save user info
    const userData = { name: form.email.split('@')[0], email: form.email }; // Example: use email prefix as name
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl border border-blue-100">
        <h2 className="text-3xl font-extrabold mb-6 text-blue-700 text-center tracking-tight">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-lg"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-lg"
          />
          {error && <div className="text-red-500 text-center font-semibold">{error}</div>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-600 hover:scale-105 transition duration-300 text-lg"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;