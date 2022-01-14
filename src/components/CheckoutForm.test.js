import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", async () => {
    // Arrange 
    render(<checkoutForm/>)

    // Act 

    // get all the input
    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);

    // type into all the input

    userEvent.type(firstNameInput, "Sharon");
    userEvent.type(lastNameInput, "Sanchez");
    userEvent.type(addressInput, "2222 Stone Brook Rd.");
    userEvent.type(cityInput, "Houston");
    userEvent.type(stateInput, "TX");
    userEvent.type(zipInput, "77019");

    // submit with button

    const submitButton = screen.getByRole('button');
    userEvent.click(submitButton);

    // Assert
    await waitFor(() => {
        const successMessage = screen.getByTestId("successMessage");
        expect (successMessage).toBeInTheDocument()
    });
});
