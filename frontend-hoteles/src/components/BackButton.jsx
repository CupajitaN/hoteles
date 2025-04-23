import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = ({ navigateTo = '/' }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    console.log('Redirigiendo a:', navigateTo); // Agregado para depuración
    navigate(navigateTo); // Redirige al destino
  };

  return (
    <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
      <button
        onClick={handleBack}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          color: '#3c8ee6',
          fontSize: '1rem',
          fontWeight: 'bold',
        }}
      >
        <FaArrowLeft style={{ marginRight: '5px' }} />
        Volver
      </button>
    </div>
  );
};

export default BackButton;
