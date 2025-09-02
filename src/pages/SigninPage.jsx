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
    try {
      const res = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        // You can store token in localStorage if needed: localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setError(data.error || 'Signin failed');
      }
    } catch {
      setError('Signin failed');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        {error && <div className="text-red-500">{error}</div>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Sign In</button>
      </form>
    </div>
  );
};

export default SigninPage;