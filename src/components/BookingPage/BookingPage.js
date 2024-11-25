import React from 'react';
import BookingForm from '../BookingForm/BookingForm';

function BookingPage() {
    return (
        <div className="background-green text-white p-3">
            <h2 className="text-center mb-4">Make a Reservation</h2>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <BookingForm />
                </div>
            </div>
        </div>
    );
}

export default BookingPage;
