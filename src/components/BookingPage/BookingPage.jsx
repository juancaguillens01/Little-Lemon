import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import BookingSlot from '../BookingSlot/BookingSlot';

function BookingPage({ availableTimes, dispatch, submitForm, selectedDate, setSelectedDate }) {
    return (
        <>
            <div className="background-green text-white p-3">
                <h2 className="text-center mb-4">Make a Reservation</h2>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <BookingForm
                            availableTimes={availableTimes}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    </div>
                </div>
            </div>
            <div className="background-yellow p-3">
                <h2 className="text-center mb-4">Booking Slots</h2>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <h5>Available Slots</h5>
                        {availableTimes.map((time) => (
                            <BookingSlot key={time} time={time} isReserved={false} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingPage;
