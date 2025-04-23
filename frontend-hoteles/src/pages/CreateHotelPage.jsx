import React from 'react';
import Logo from '../components/Logo';
import BackButton from '../components/BackButton';
import CreateHotelForm from '../components/CreateHotelForm';

const CreateHotelPage = () => {
  return (
    <div
      className="home-page"
      style={{
        textAlign: 'center',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%)',
      }}
    >
      <img
        src="https://i.postimg.cc/fRs06J8W/img2.jpg"
        alt="Fondo de playa"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          background: 'white',
          borderRadius: '16px',
          padding: '3rem 2rem',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          maxWidth: '90%',
          width: '400px',
        }}
      >
        <BackButton />
        <Logo />
        <h1 style={{ color: '#333', fontSize: '1.5rem', marginBottom: '1rem' }}>Añadir nuevo hotel</h1>
        <CreateHotelForm />
      </div>
    </div>
  );
};

export default CreateHotelPage;
