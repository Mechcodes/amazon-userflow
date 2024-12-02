import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import Cart from './components/Cart';
import Checkout from './pages/CheckoutPage';
import OrderConfirmation from './pages/OrderConfirmation';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />

    </Routes>
  </Router>
);

export default App;
