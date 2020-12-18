import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, handleChanges] = useForm(initialValue); //called custom useForm hook-Audrey

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Checkout Form</h1>
       
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            required/>
        </label>
       
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            required/>
        </label>
        
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
            required/>
        </label>
        
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges}required />
        </label>
        
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} required />
        </label>
        
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} required />
        </label>
       
        <button test-id ="checkout">Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" test-id = "successMessage">
            <p>You have ordered some plants! Woo-hoo! 
              <span role="img">🎉</span>
            </p>
            <p>Your new green friends will be shipped to:</p>
              <br />
              <br />
            <p>{values.firstName} {values.lastName}</p>
            <p>{values.address}</p>
            <p>{values.city}, {values.state} {values.zip}</p>
          </div>
      )}
    </div>
  );
};

export default CheckoutForm;
