import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { hotelService } from '../services/hotelService'; // Suponiendo que tienes un servicio para manejar las habitaciones
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Logo from '../components/Logo';
import BackButton from '../components/BackButton';

const RoomListPage = () => {
  const { hotelId } = useParams(); // Usamos el hotelId dinámico desde la URL
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRoomsData = async () => {
      try {
        const data = await hotelService.getRoomsByHotel(hotelId); // Usamos hotelId desde la URL
        setRooms(data);
      } catch (error) {
        console.error('Error al cargar las habitaciones:', error);
      }
    };
    fetchRoomsData();
  }, [hotelId]);

  return (
    <div 
      className="room-list-page"
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
          width: '90%',
        }}
      >
        <BackButton navigateTo={`/ver-hoteles`} />
        <Logo />
        <h1 style={{ color: '#333', fontSize: '1.5rem', marginBottom: '1rem' }}>Lista de Habitaciones</h1>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tipo de Habitación</TableCell>
                <TableCell>Acomodación</TableCell>
                <TableCell>Cantidad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rooms.map((room) => (
                <TableRow key={room.id}>
                  <TableCell>{room.tipo_habitacion.nombre}</TableCell>
                  <TableCell>{room.acomodacion.nombre}</TableCell>
                  <TableCell>{room.cantidad}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default RoomListPage;
