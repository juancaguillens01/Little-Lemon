import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockAvailableTimes = ["10:00 AM", "12:00 PM", "02:00 PM"];
const mockDispatch = jest.fn();
const mockSelectedDate = new Date();
const mockSetSelectedDate = jest.fn();
const mockSubmitForm = jest.fn();

describe("BookingForm", () => {
test("Renders the 'Choose date' label", () => {
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

test("Renders the 'Choose time' label", () => {
    render(
    <BookingForm
        availableTimes={mockAvailableTimes}
        selectedDate={mockSelectedDate}
        setSelectedDate={mockSetSelectedDate}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
    />
    );
    const headingElement = screen.getByText(/choose time/i);
    expect(headingElement).toBeInTheDocument();
});

test("Renders the 'Number of guests' label", () => {
    render(
    <BookingForm
        availableTimes={mockAvailableTimes}
        selectedDate={mockSelectedDate}
        setSelectedDate={mockSetSelectedDate}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
    />
    );
    const headingElement = screen.getByText(/number of guests/i);
    expect(headingElement).toBeInTheDocument();
});

test("Renders the 'Occasion' label", () => {
    render(
    <BookingForm
        availableTimes={mockAvailableTimes}
        selectedDate={mockSelectedDate}
        setSelectedDate={mockSetSelectedDate}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
    />
    );
    const headingElement = screen.getByText(/occasion/i);
    expect(headingElement).toBeInTheDocument();
});

test("Renders the date input field with the correct attributes", () => {
    render(
    <BookingForm
        availableTimes={mockAvailableTimes}
        selectedDate={mockSelectedDate}
        setSelectedDate={mockSetSelectedDate}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
    />
    );
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("value", mockSelectedDate.toISOString().split('T')[0]);
});

test("Renders the time select field with available times", () => {
    render(
    <BookingForm
        availableTimes={mockAvailableTimes}
        selectedDate={mockSelectedDate}
        setSelectedDate={mockSetSelectedDate}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
    />
    );
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeInTheDocument();
    mockAvailableTimes.forEach((time) => {
    expect(screen.getByText(time)).toBeInTheDocument();
    });
});

test("Renders the number of guests input with min and max attributes", () => {
    render(
    <BookingForm
        availableTimes={mockAvailableTimes}
        selectedDate={mockSelectedDate}
        setSelectedDate={mockSetSelectedDate}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
    />
    );
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
});

test("Renders the occasion select field with 'Birthday' and 'Anniversary' options", () => {
    render(
    <BookingForm
        availableTimes={mockAvailableTimes}
        selectedDate={mockSelectedDate}
        setSelectedDate={mockSetSelectedDate}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
    />
    );
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeInTheDocument();
    expect(screen.getByText("Birthday")).toBeInTheDocument();
    expect(screen.getByText("Anniversary")).toBeInTheDocument();
});

test("Displays an error message when a past date is selected", () => {
    render(
    <BookingForm
        availableTimes={mockAvailableTimes}
        selectedDate={mockSelectedDate}
        setSelectedDate={mockSetSelectedDate}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
    />
    );
    const pastDate = "2023-01-01";
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: pastDate } });

    const errorMessage = screen.getByText(/selected date cannot be in the past/i);
    expect(errorMessage).toBeInTheDocument();
});

test("Does not display error message when a valid date is selected", () => {
    render(
    <BookingForm
        availableTimes={mockAvailableTimes}
        selectedDate={mockSelectedDate}
        setSelectedDate={mockSetSelectedDate}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
    />
    );
    const validDate = new Date().toISOString().split('T')[0];
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: validDate } });

    const errorMessage = screen.queryByText(/selected date cannot be in the past/i);
    expect(errorMessage).toBeNull();
});

test("Submits the form correctly when all fields are valid", () => {
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

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(dateInput, { target: { value: "2024-12-26" } });
    fireEvent.change(timeSelect, { target: { value: "10:00 AM" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledWith({
        date: "2024-12-26",
        time: "10:00 AM",
        guests: "4",
        occasion: "Birthday"
    });
});
});
