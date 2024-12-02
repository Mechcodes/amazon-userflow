import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    alert('You have been logged out.');
    navigate('/signin');
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold"><Link to="/" >Amazon Clone</Link></h1>
      <nav className="flex items-center">
        {loggedInUser ? (
          <>
            <span className="mr-4">Hello, {loggedInUser.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className="mx-2">Sign Up</Link>
            <Link to="/signin" className="mx-2">Sign In</Link>
          </>
        )}
        <Link to="/cart" className="mx-2">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
