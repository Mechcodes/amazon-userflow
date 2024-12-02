import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (user) {
      alert(`Welcome back, ${user.name}!`);
      localStorage.setItem('loggedInUser', JSON.stringify(user)); // Save user session
      navigate('/'); // Redirect to homepage
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
