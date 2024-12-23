import React from 'react';
import ActionButton from '../ActionButton/ActionButton';

function ConfirmedBooking() {
    return (
        <div className="d-flex flex-column align-items-center background-green px-3">
            <h1 className="mt-3 color-yellow">Reservation Confirmed</h1>
            <p className="text-center text-light">
                Thank you for your reservation! We have received your request and look forward to seeing you on the selected day and time.
            </p>
            <div className="text-center mt-4 mb-4">
                <ActionButton link="/">Back to Home</ActionButton>
            </div>
        </div>
    );
}

export default ConfirmedBooking;
