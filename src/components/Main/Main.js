import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import NotImplemented from '../NotImplemented/NotImplemented';
import BookingPage from '../BookingPage/BookingPage';

function Main() {
    return (
        <main className="w-100">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservations" element={<BookingPage />} />
                <Route path="/about" element={<NotImplemented />} />
                <Route path="/menu" element={<NotImplemented />} />
                <Route path="/orderOnline" element={<NotImplemented />} />
                <Route path="/login" element={<NotImplemented />} />
            </Routes>
        </main>
    );
}

export default Main;
