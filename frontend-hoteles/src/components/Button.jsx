import React from 'react';

const Button = ({ color = '#007BFF', text, icon: Icon, onClick }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    border: `2px solid ${color}`,
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease, border 0.3s ease',
  };

  const iconStyle = {
    marginRight: Icon ? '8px' : '0',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = `${color === '#007BFF' ? '#0056b3' : '#218838'}`;
        e.target.style.border = `2px solid ${color === '#007BFF' ? '#0056b3' : '#218838'}`;
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = color;
        e.target.style.border = `2px solid ${color}`;
      }}
    >
      {Icon && <Icon style={iconStyle} />}
      {text}
    </button>
  );
};

export default Button;
