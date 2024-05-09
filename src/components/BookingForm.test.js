import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe('Booking form', () => {
    const availableTimes = ['17:00', '17:30'];
    const today = new Date().toISOString().split('T')[0];
    const dispatchOnDateChange = jest.fn();
    const submitData = jest.fn();

test('Renders a choose date label', () => {
    render(<BookingForm availableTimes={availableTimes}/>)
    const dateLabel = screen.getByText("Choose date")
    expect(dateLabel).toBeInTheDocument()
})

})

