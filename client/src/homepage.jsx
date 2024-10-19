//import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #6B73FF 10%, #000DFF 100%)',
        color: 'white',
      }}
    >
      <h1 className="mb-4" style={{ fontSize: '3rem' }}>Welcome to Our Store</h1>
      <p className="mb-4" style={{ fontSize: '1.2rem' }}>Discover amazing products and deals!</p>
      
      <div>
        <Link
          to="/products"
          className="btn btn-light px-4 py-2 rounded-pill"
          style={{ fontSize: '1.2rem', marginRight: '10px' }}
        >
          Shop Now
        </Link>
        <Link
          to="/login"
          className="btn btn-outline-light px-4 py-2 rounded-pill"
          style={{ fontSize: '1.2rem' }}
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
