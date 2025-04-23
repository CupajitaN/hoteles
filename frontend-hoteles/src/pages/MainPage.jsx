import React, { useState } from 'react';
import { useHotels } from '../store/HotelContext';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { FaHotel, FaListAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const { hotels, loading, error } = useHotels();
  const [view, setView] = useState('list');
  const navigate = useNavigate();

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
        <Logo />
        <h1 style={{ color: '#333', fontSize: '1.5rem', marginBottom: '2rem' }}>BIENVENIDO</h1>

        {/* Botones */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap',
          }}
        >
          <Button 
            color="#3c8ee6" 
            text="Añadir hotel" 
            icon={FaHotel} 
            onClick={() => navigate('/crear-hotel')}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              backgroundColor: '#3c8ee6',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          />
          <Button 
            color="#e6a13c" 
            text="Ver hoteles" 
            icon={FaListAlt} 
            onClick={() => navigate('/ver-hoteles')}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              backgroundColor: '#e6a13c',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
