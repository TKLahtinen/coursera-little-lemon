import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe('Booking form', () => {
    const availableTimes = ['17:00', '17:30'];
    const today = new Date().toISOString().split('T')[0];
    const dispatchOnDateChange = jest.fn();
    const submitData = jest.fn();

test ('renders the form with default values', async () => {
    render(
        <BookingForm
            availableTimes={availableTimes}
            submitData={submitData}
        />
    )

    const dateInput = screen.getByLabelText(/Choose date/);
    const timeSelect = screen.getByLabelText(/Choose time/);
    const timeOptions = await screen.findAllByTestId('booking-time-option');
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionOptions = await screen.findAllByTestId('occasion-option');
    const submitButton = screen.getByRole('button')

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'res-date');
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('id', 'res-time');
    expect(timeOptions.length).toBe(2);

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
    expect(numberOfGuestsInput).toHaveAttribute('id', 'guests');
    expect(numberOfGuestsInput).toHaveAttribute('min', '1');
    expect(numberOfGuestsInput).toHaveAttribute('max', '10');
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('id', 'occasion');
    expect(occasionOptions.length).toBe(2);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
})

    test('successfully submits the form with valid data', () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                submitData={submitData}
            />
        )

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        expect(submitData).toHaveBeenCalledWith({
            date: today,
            resTime: availableTimes[0],
            guests: 1,
            occasion: 'Birthday'
        })
    })

    test('shows an error message when date is not selected', () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                submitData={submitData}
                dispatchOnDateChange={dispatchOnDateChange}
            />
        )

        const submitButton = screen.getByRole('button');
        const dateInput = screen.getByLabelText(/Choose date/);
        
        fireEvent.change(dateInput, { target: { value: '' } });
        fireEvent.blur(dateInput);
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Please select a date/);
        expect(errorMessage).toHaveTextContent('Please select a date');
    })

    test('shows an error message when number of guests is not selected', () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                submitData={submitData}
                dispatchOnDateChange={dispatchOnDateChange}
            />
        )

        const submitButton = screen.getByRole('button');
        const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);

        fireEvent.change(numberOfGuestsInput, { target: { value: '' } });
        fireEvent.blur(numberOfGuestsInput);
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Please select a number of guests between 1 and 10/);
        expect(errorMessage).toHaveTextContent('Please select a number of guests between 1 and 10');
    })
})

