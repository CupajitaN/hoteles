import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, MenuItem, Button, FormControl, InputLabel, Select } from '@mui/material';
import { hotelService } from '../services/hotelService';
import Logo from '../components/Logo';
import BackButton from '../components/BackButton';
import useFilteredAccommodations from '../hooks/useFilteredAccommodations';

const RoomFormPage = () => {
  const { hotelId } = useParams();
  const [cantidad, setCantidad] = useState('');
  const [tipoHabitacion, setTipoHabitacion] = useState('');
  const [acomodacion, setAcomodacion] = useState('');
  const [tiposHabitacion, setTiposHabitacion] = useState([]);
  const [acomodaciones, setAcomodaciones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);  // Para manejar el error
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const roomTypes = await hotelService.getRoomTypes();
        setTiposHabitacion(roomTypes);

        const accommodations = await hotelService.getAccommodations();
        setAcomodaciones(accommodations);

        setIsLoading(false);
      } catch (error) {
        console.error('Error al cargar las opciones:', error);
        setIsLoading(false);
      }
    };

    if (tiposHabitacion.length === 0 && acomodaciones.length === 0) {
      fetchOptions();
    }
  }, [tiposHabitacion, acomodaciones]);

  // Usar el hook para obtener las acomodaciones filtradas
  const filteredAcomodaciones = useFilteredAccommodations(tipoHabitacion, acomodaciones);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newRoom = {
      cantidad,
      tipo_habitacion_id: tipoHabitacion,
      acomodacion_id: acomodacion,
    };
  
    try {
        await hotelService.createRoom(hotelId, newRoom);
        navigate(`/ver-hoteles`); // Redirige al detalle del hotel
    } catch (error) {
        setError(error.message);  // Mostrar el error al usuario
    }
    };

  return (
    <div style={{
      textAlign: 'center', height: '100vh', overflow: 'hidden', display: 'flex',
      justifyContent: 'center', alignItems: 'center', position: 'relative',
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%)',
    }}>
      <img
        src="https://i.postimg.cc/fRs06J8W/img2.jpg"
        alt="Fondo de playa"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
      />

      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0, 0, 0, 0.3)', zIndex: 1,
      }} />
      
      <div style={{
        position: 'relative', zIndex: 2, background: 'white', borderRadius: '16px',
        padding: '3rem 2rem', boxShadow: '0 8px 20px rgba(0,0,0,0.2)', maxWidth: '90%', width: '400px',
      }}>
        <BackButton navigateTo={`/ver-hoteles`} />
        <Logo />
        <h2 style={{ color: '#333', fontSize: '1.5rem', marginBottom: '1rem' }}>Agregar Habitación</h2>

        {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}  {/* Muestra el error */}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Cantidad"
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            fullWidth
            required
          />

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Tipo de Habitación</InputLabel>
            <Select
              value={tipoHabitacion}
              onChange={(e) => setTipoHabitacion(e.target.value)}
              label="Tipo de Habitación"
            >
              {tiposHabitacion.length > 0 ? (
                tiposHabitacion.map((type) => (
                  <MenuItem key={type.id} value={type.id}>
                    {type.nombre}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">No hay tipos de habitación disponibles</MenuItem>
              )}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Acomodación</InputLabel>
            <Select
              value={acomodacion}
              onChange={(e) => setAcomodacion(e.target.value)}
              label="Acomodación"
            >
              {filteredAcomodaciones.length > 0 ? (
                filteredAcomodaciones.map((accommodation) => (
                  <MenuItem key={accommodation.id} value={accommodation.id}>
                    {accommodation.nombre}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">No hay acomodaciones disponibles</MenuItem>
              )}
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Guardar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RoomFormPage;
