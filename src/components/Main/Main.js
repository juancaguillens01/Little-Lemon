import { Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
import Home from '../Home/Home';
import NotImplemented from '../NotImplemented/NotImplemented';
import BookingPage from '../BookingPage/BookingPage';

const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        default:
            return state;
    }
};

const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function Main() {
    const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());

    return (
        <main className="w-100">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/reservations"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                        />
                    }
                />
                <Route path="/about" element={<NotImplemented />} />
                <Route path="/menu" element={<NotImplemented />} />
                <Route path="/orderOnline" element={<NotImplemented />} />
                <Route path="/login" element={<NotImplemented />} />
            </Routes>
        </main>
    );
}

export default Main;
