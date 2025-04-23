import React, { useState } from 'react';
import { hotelService } from '../services/hotelService'; // Importamos el servicio

const CreateHotelForm = () => {
  const [form, setForm] = useState({
    nombre: '',
    direccion: '',
    ciudad: '',
    nit: '',
    numero_habitaciones: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Limpiar error cuando el usuario escribe
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        newErrors[key] = 'Este campo es obligatorio';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Llamamos al servicio para crear un nuevo hotel
      const newHotel = await hotelService.createHotel(form);

      alert('Hotel creado exitosamente');
      setForm({ nombre: '', direccion: '', ciudad: '', nit: '', numero_habitaciones: '' });
      setErrors({});
    } catch (error) {
      console.error('Error al crear el hotel:', error);
      alert('Hubo un error al crear el hotel. Intenta nuevamente.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100%', maxWidth: '350px' }}>
        <InputField
          name="nombre"
          placeholder="Nombre del hotel"
          value={form.nombre}
          onChange={handleChange}
          error={errors.nombre}
        />
        <InputField
          name="direccion"
          placeholder="Dirección"
          value={form.direccion}
          onChange={handleChange}
          error={errors.direccion}
        />
        <InputField
          name="ciudad"
          placeholder="Ciudad"
          value={form.ciudad}
          onChange={handleChange}
          error={errors.ciudad}
        />
        <InputField
          name="nit"
          placeholder="NIT"
          value={form.nit}
          onChange={handleChange}
          error={errors.nit}
        />
        <InputField
          name="numero_habitaciones"
          type="number"
          placeholder="Número de habitaciones"
          value={form.numero_habitaciones}
          onChange={handleChange}
          error={errors.numero_habitaciones}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: '12px 24px',
          backgroundColor: '#3c8ee6',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Guardar
      </button>
    </form>
  );
};

const InputField = ({ name, placeholder, value, onChange, error, type = 'text' }) => (
  <div style={{ marginBottom: '1rem' }}>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: error ? '1px solid red' : '1px solid #ccc',
        outline: 'none',
      }}
    />
    {error && <span style={{ color: 'red', fontSize: '0.875rem' }}>{error}</span>}
  </div>
);

export default CreateHotelForm;
