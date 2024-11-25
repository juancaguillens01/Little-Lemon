import React, { useState } from 'react';

function BookingForm() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday'
    });

    const [errors, setErrors] = useState({});

    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: ''
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.date) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                date: 'Date is required'
            }));
            return;
        }
        console.log("Form submitted successfully");
    };

    return (
        <form
            onSubmit={handleSubmit}
        >
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
                <option value="Aniversary">Aniversary</option>
            </select>

            <button type="submit" className="btn btn-primary w-100 mb-3">
                Submit
            </button>
        </form>
    );
}

export default BookingForm;
