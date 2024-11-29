import React from 'react';

function BookingSlot({ time, isReserved }) {
    return (
        <div
            className={`p-2 mb-2 border ${
                isReserved ? 'bg-secondary text-white' : 'bg-light text-dark'
            }`}
        >
            {time} {isReserved ? '(Reserved)' : '(Available)'}
        </div>
    );
}

export default BookingSlot;
