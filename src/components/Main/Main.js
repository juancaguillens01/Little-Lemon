import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Reservations from '../Reservation/Reservation';

function Main() {
    return (
        <main className="w-100">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservations" element={<Reservations />} />
            </Routes>
        </main>
    );
}

export default Main;
