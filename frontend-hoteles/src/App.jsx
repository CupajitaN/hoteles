import './App.css';
import MainPage from './pages/MainPage';
import CreateHotelPage from './pages/CreateHotelPage';
import HotelListPage from './pages/HotelListPage';
import RoomFormPage from './pages/RoomFormPage';
import RoomListPage from './pages/RoomListPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/crear-hotel" element={<CreateHotelPage />} />
        <Route path="/ver-hoteles" element={<HotelListPage />} />
        <Route path="/hotel/:hotelId/rooms" element={<RoomFormPage />} />
        <Route path="/hotel/:hotelId/rooms_list" element={<RoomListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
