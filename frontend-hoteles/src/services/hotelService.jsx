import axios from 'axios';

const API_URL = 'http://localhost:8000/api/hoteles';

export const hotelService = {
  getHotels: async () => {
    try {
      const response = await axios.get(API_URL); // ✅ Llamada real a la API
      return response.data; // 👈 Aquí llega el array de hoteles desde Laravel
    } catch (error) {
      console.error("Error fetching hotels:", error);
      return []; // Retorna un array vacío en caso de error
    }
  },

  createHotel: async (hotelData) => {
    try {
      // Realizamos la solicitud para guardar un nuevo hotel
      const response = await axios.post(API_URL, hotelData);
      return response.data; // Regresamos la respuesta del backend
    } catch (error) {
      console.error("Error creating hotel:", error);
      throw new Error('Failed to create hotel');
    }
  },

  getHotelById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching hotel by ID:", error);
      throw new Error('Failed to load hotel details');  
    }
  },

  getRoomTypes: async () => {
    const response = await axios.get('http://localhost:8000/api/tipos-habitacion');
    return response.data;
  },

  getAccommodations: async () => {
    const response = await axios.get('http://localhost:8000/api/acomodaciones');
    return response.data;
  },

  createRoom: async (hotelId, roomData) => {
    try {
        const response = await axios.post(`http://localhost:8000/api/hoteles/${hotelId}/habitaciones`, roomData);
        return response.data; // Devuelve los datos de la habitación creada
    } catch (error) {
        if (error.response && error.response.data) {
            // Verificar si el error tiene detalles específicos sobre la cantidad
            const errorMessage = error.response.data.errors?.cantidad
                ? error.response.data.errors.cantidad.join(', ')  // Si hay un error de cantidad específico
                : error.response.data.errors?.tipo_habitacion_id?.join(', ') ||  // Si hay error de tipo de habitación
                  error.response.data.error || 'Error al crear la habitación'; // Si no hay un error específico, mostrar el general
  
            throw new Error(errorMessage);
        } else {
            throw new Error('Error de conexión');
        }
    }
  },

  getRoomsByHotel: async (hotelId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/hoteles/${hotelId}/habitaciones_listado`);
      if (!response.ok) throw new Error('Error al obtener las habitaciones');
      const data = await response.json();
      return data;  // Aquí recibirás el JSON con las habitaciones
    } catch (error) {
      console.error('Error al obtener las habitaciones:', error);
      throw error;
    }
  },
  
  
};
