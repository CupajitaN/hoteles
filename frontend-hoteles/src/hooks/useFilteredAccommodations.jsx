import { useState, useEffect } from 'react';

const useFilteredAccommodations = (tipoHabitacion, acomodaciones) => {
    const [filteredAcomodaciones, setFilteredAcomodaciones] = useState([]);

    useEffect(() => {
        if (tipoHabitacion) {
            let filtered = [];

            // Asegurándote de que el tipoHabitacion es un número y no una cadena
            switch (parseInt(tipoHabitacion)) {
                case 1: // ESTÁNDAR
                    filtered = acomodaciones.filter(accommodation => accommodation.nombre === 'SENCILLA' || accommodation.nombre === 'DOBLE');
                    break;
                case 2: // JUNIOR
                    filtered = acomodaciones.filter(accommodation => accommodation.nombre === 'TRIPLE' || accommodation.nombre === 'CUÁDRUPLE');
                    break;
                case 3: // SUITE
                    filtered = acomodaciones.filter(accommodation => accommodation.nombre === 'SENCILLA' || accommodation.nombre === 'DOBLE' || accommodation.nombre === 'TRIPLE');
                    break;
                default:
                    filtered = acomodaciones; // Si no hay tipoHabitacion o es desconocido, no filtra
            }

            setFilteredAcomodaciones(filtered);
        }
    }, [tipoHabitacion, acomodaciones]);

    return filteredAcomodaciones;
};

export default useFilteredAccommodations;
