import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingPage from "./BookingPage";

describe("BookinSite", () => {

    const timeFormat = /^(([0-1]?[0-9])|([2][0-3])):[0-5][0-9]$/;

    test('Should have one or more booking times', async () => {
        render(
            <MemoryRouter>
                <BookingPage />
            </MemoryRouter>
        );

        const bookingOptions = await screen.findAllByTestId('booking-time-option');

        expect(bookingOptions.length).toBeGreaterThanOrEqual(1);
        bookingOptions.forEach(bookingOption => {
            expect(bookingOption.value).toMatch(timeFormat);
        })
    })

    test('Should have available booking times when date is changed', async () => {
        render(
            <MemoryRouter>
                <BookingPage />
            </MemoryRouter>
        );

        const bookingDate = '2024-06-06';
        const dateInput = screen.getByLabelText(/Choose date/);
        const initialBookingOptions = await screen.findAllByTestId('booking-time-option');
        fireEvent.change(dateInput, { target: { value: bookingDate } });
        fireEvent.blur(dateInput);
        const updatedBookingOptions = await screen.findAllByTestId('booking-time-option');

        expect(dateInput).toHaveValue(bookingDate);
        initialBookingOptions.forEach(bookingOption => {
            expect(bookingOption.value).toMatch(timeFormat);
        })
        updatedBookingOptions.forEach(bookingOption => {
            expect(bookingOption.value).toMatch(timeFormat);
        })


    })
})
