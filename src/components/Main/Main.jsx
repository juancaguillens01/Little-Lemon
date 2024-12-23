import { Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
import Home from '../Home/Home';
import NotImplemented from '../NotImplemented/NotImplemented';
import BookingPage from '../BookingPage/BookingPage';
import { fetchAPI } from '../../utils/api.ts';

export const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(action.payload);
        default:
            return state;
    }
};

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};


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
