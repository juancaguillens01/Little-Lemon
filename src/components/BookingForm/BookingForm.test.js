import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the 'Choose date' label", () => {
    const mockAvailableTimes = ["10:00 AM", "12:00 PM", "02:00 PM"];
    const mockDispatch = jest.fn();
    const mockSelectedDate = new Date();
    const mockSetSelectedDate = jest.fn();
    const mockSubmitForm = jest.fn();

    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            selectedDate={mockSelectedDate}
            setSelectedDate={mockSetSelectedDate}
            dispatch={mockDispatch}
            submitForm={mockSubmitForm}
        />
    );

    const headingElement = screen.getByText(/choose date/i);
    expect(headingElement).toBeInTheDocument();
});
