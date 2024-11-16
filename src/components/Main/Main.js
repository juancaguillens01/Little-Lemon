import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Reservation from '../Reservation/Reservation';
import NotImplemented from '../NotImplemented/NotImplemented';

function Main() {
    return (
        <main className="w-100">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservations" element={<Reservation />} />
                <Route path="/about" element={<NotImplemented />} />
                <Route path="/menu" element={<NotImplemented />} />
                <Route path="/orderOnline" element={<NotImplemented />} />
                <Route path="/login" element={<NotImplemented />} />
            </Routes>
        </main>
    );
}

export default Main;
