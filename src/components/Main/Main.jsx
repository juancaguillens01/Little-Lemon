import { Route, Routes, useNavigate } from 'react-router-dom';
import { useReducer, useState, useEffect } from 'react';
import Home from '../Home/Home';
import NotImplemented from '../NotImplemented/NotImplemented';
import BookingPage from '../BookingPage/BookingPage';
import ConfirmedBooking from '../ConfirmedBooking/ConfirmedBooking';
import { fetchAPI, submitAPI } from '../../utils/api.ts';

export const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.payload;
        default:
            return state;
    }
};

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

function Main() {
    const navigate = useNavigate();
    const [availableTimes, dispatch] = useReducer(timesReducer, []);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const fetchTimes = async () => {
            try {
                const times = await fetchAPI(selectedDate);
                dispatch({ type: 'UPDATE_TIMES', payload: times });
            } catch (error) {
                console.error('Error fetching times:', error);
            }
        };

        fetchTimes();
    }, [selectedDate]);

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate('/confirmed');
        }
    };

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
                            submitForm={submitForm}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                        />
                    }
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
                <Route path="/about" element={<NotImplemented />} />
                <Route path="/menu" element={<NotImplemented />} />
                <Route path="/orderOnline" element={<NotImplemented />} />
                <Route path="/login" element={<NotImplemented />} />
            </Routes>
        </main>
    );
}

export default Main;
