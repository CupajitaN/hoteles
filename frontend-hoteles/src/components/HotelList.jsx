import React from 'react';
import { FaEdit, FaTrash, FaPlus, FaList } from 'react-icons/fa';
import { hotelService } from '../services/hotelService';

const HotelList = ({ hotels, onDelete }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Ciudad</th>
          <th>NIT</th>
          <th>Habitaciones</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {hotels.map((hotel) => (
          <tr key={hotel.id}>
            <td>{hotel.name}</td>
            <td>{hotel.address}</td>
            <td>{hotel.city}</td>
            <td>{hotel.nit}</td>
            <td>{hotel.rooms}</td>
            <td>
              {/* Botón para añadir habitaciones */}
              <button 
                onClick={() => handleAddRooms(hotel.id)} 
                style={actionButtonStyle}
              >
                <FaPlus /> Añadir Habitaciones
              </button>
              
              {/* Botón para ver la lista de habitaciones */}
              <button 
                onClick={() => handleListRooms(hotel.id)} 
                style={actionButtonStyle}
              >
                <FaList /> Lista Habitaciones
              </button>
              
              {/* Botón para editar */}
              <button 
                onClick={() => handleEdit(hotel.id)} 
                style={actionButtonStyle}
              >
                <FaEdit />
              </button>
              
              {/* Botón para eliminar */}
              <button 
                onClick={() => onDelete(hotel.id)} 
                style={actionButtonStyle}
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Lógica de edición
function handleEdit(id) {
  console.log('Editar hotel', id);
  // Aquí iría la lógica para redirigir a una página de edición o abrir un modal
}

// Lógica para añadir habitaciones
function handleAddRooms(id) {
  console.log('Añadir habitaciones al hotel', id);
  // Aquí se puede redirigir a la página donde se puedan añadir habitaciones para el hotel
}

// Lógica para listar habitaciones
function handleListRooms(id) {
  console.log('Ver lista de habitaciones del hotel', id);
  // Aquí se puede redirigir a una página para ver la lista de habitaciones
}

const actionButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#3c8ee6',
  marginRight: '10px',
};

export default HotelList;
