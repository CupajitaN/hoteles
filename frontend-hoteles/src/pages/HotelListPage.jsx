import React, { useState, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import { hotelService } from '../services/hotelService';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Button, Paper } from '@mui/material';
import Logo from '../components/Logo';
import BackButton from '../components/BackButton';

const HotelListPage = () => {
  const [hotels, setHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 5; // Aumentamos los hoteles por página para mayor visibilidad
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await hotelService.getHotels();
        setHotels(data);
      } catch (error) {
        console.error('Error al cargar los hoteles:', error);
      }
    };
    fetchHotels();
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: 'Nombre', accessor: 'nombre' },
      { Header: 'Dirección', accessor: 'direccion' },
      { Header: 'Ciudad', accessor: 'ciudad' },
      { Header: 'NIT', accessor: 'nit' },
      { Header: 'Habitaciones', accessor: 'numero_habitaciones' },
      {
        Header: 'Acciones',
        Cell: ({ row }) => (
          <>
            {/* Botón para añadir habitaciones */}
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={() => navigate(`/hotel/${row.original.id}/rooms`)} // Redirige a la página para añadir habitaciones
              style={{ marginRight: '10px' }}
            >
              Añadir Habitaciones
            </Button>

            {/* Botón para ver la lista de habitaciones */}
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={() => navigate(`/hotel/${row.original.id}/rooms_list`)} // Redirige a la lista de habitaciones
              style={{ marginRight: '10px' }}
            >
              Lista Habitaciones
            </Button>

            {/* Botón para eliminar */}
            <Button 
              variant="outlined" 
              color="warning" 
              onClick={() => handleDelete(row.original.id)}
            >
              Eliminar
            </Button>
          </>
        )
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data: hotels,
      initialState: { pageIndex: currentPage - 1 },
      pageCount: Math.ceil(hotels.length / hotelsPerPage),
    },
    usePagination
  );

  const handleDelete = (id) => {
    hotelService.deleteHotel(id);
    setHotels(hotels.filter(hotel => hotel.id !== id));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div 
      className="home-page"
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
        <BackButton navigateTo="/" />

        <Logo />
        <h1 style={{ color: '#333', fontSize: '1.5rem', marginBottom: '1rem' }}>Lista de hoteles</h1>

        <TableContainer component={Paper}>
            <Table {...getTableProps()}>
                <TableHead>
                {headerGroups.map(headerGroup => {
                    const { key, ...rest } = headerGroup.getHeaderGroupProps();
                    return (
                    <TableRow key={key} {...rest}>
                        {headerGroup.headers.map(column => {
                        const { key: colKey, ...colRest } = column.getHeaderProps();
                        return <TableCell key={colKey} {...colRest}>{column.render('Header')}</TableCell>;
                        })}
                    </TableRow>
                    );
                })}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    const { key, ...rest } = row.getRowProps();
                    return (
                    <TableRow key={key} {...rest}>
                        {row.cells.map(cell => {
                        const { key: cellKey, ...cellRest } = cell.getCellProps();
                        return <TableCell key={cellKey} {...cellRest}>{cell.render('Cell')}</TableCell>;
                        })}
                    </TableRow>
                    );
                })}
                </TableBody>
            </Table>
        </TableContainer>

        {/* Paginación */}
        <div style={{ marginTop: '1rem' }}>
          <TablePagination
            count={hotels.length}
            page={currentPage - 1}
            onPageChange={(event, newPage) => paginate(newPage + 1)}
            rowsPerPage={hotelsPerPage}
            rowsPerPageOptions={[]}
            component="div"
          />
        </div>
      </div>
    </div>
  );
};

export default HotelListPage;
