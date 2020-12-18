import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const header = getByText(/checkout form/i);
    expect(header).toBeInTheDocument();

  });//-Audrey

test("form shows success message on submit with form details", () => {
    const { getByTestId } = render(<CheckoutForm />);
    const submitButton = getByTestId("checkout");
    fireEvent.click(submitButton);
 
    const success = getByTestId("successMessage");
    expect(success).toBeInTheDocument();

});//-Audrey


