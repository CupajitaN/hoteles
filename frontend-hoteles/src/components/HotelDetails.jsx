import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHotelById } from '../services/hotelService';

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const data = await getHotelById(id);
        setHotel(data);
      } catch (error) {
        console.error("Error fetching hotel:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHotel();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!hotel) return <div>Hotel not found</div>;

  return (
    <div>
      <h1>{hotel.name}</h1>
      <p>{hotel.address}</p>
      <p>{hotel.city}, {hotel.state}, {hotel.country}</p>
      <p>Rating: {hotel.rating}</p>
      <p>Phone: {hotel.phone_number}</p>
    </div>
  );
};

export default HotelDetails;
