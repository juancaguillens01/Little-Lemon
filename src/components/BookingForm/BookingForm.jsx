import React, { useState } from 'react';

function BookingForm({ availableTimes, selectedDate, setSelectedDate, dispatch, submitForm }) {
    const currentDate = new Date().toISOString().split('T')[0];

    const [formData, setFormData] = useState({
        date: selectedDate.toISOString().split('T')[0],
        time: '',
        guests: 1,
        occasion: 'Birthday',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === 'date') {
            const selectedDateValue = new Date(value);
            if (selectedDateValue >= new Date(currentDate)) {
                setSelectedDate(selectedDateValue);
                dispatch({ type: 'UPDATE_TIMES', payload: availableTimes }); // Refetch times
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    date: 'Selected date cannot be in the past',
                }));
                return;
            }
        }

        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: '',
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (new Date(formData.date) < new Date(currentDate)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                date: 'Selected date cannot be in the past',
            }));
            return;
        }
        submitForm(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className={`form-control mb-2 ${errors.date ? 'is-invalid' : ''}`}
            />
            {errors.date && <div className="text-danger mb-3">{errors.date}</div>}

            <label htmlFor="time">Choose time</label>
            <select
                id="time"
                value={formData.time}
                onChange={handleChange}
                className="form-select mb-4"
            >
                {availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                max="10"
                className="form-control mb-4"
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="form-select mb-5"
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button type="submit" className="btn btn-primary w-100 mb-3">
                Submit
            </button>
        </form>
    );
}

export default BookingForm;
