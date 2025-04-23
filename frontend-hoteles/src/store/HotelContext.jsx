import React, { createContext, useState, useContext, useEffect } from 'react';
import { hotelService } from '../services/hotelService';


const HotelContext = createContext();

export const useHotels = () => {
  return useContext(HotelContext);
};

export const HotelProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await hotelService.getHotels();
        setHotels(data);
      } catch (error) {
        setError('Failed to load hotels');
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return (
    <HotelContext.Provider value={{ hotels, loading, error }}>
      {children}
    </HotelContext.Provider>
  );
};
