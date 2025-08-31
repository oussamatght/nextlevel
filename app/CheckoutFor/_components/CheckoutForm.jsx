"use client";

import React, { useContext, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";


export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/pageconfirmpayment",
      },
    });

    if (error) setMessage(error.message);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type="submit"
        disabled={loading || !stripe || !elements}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {message && <p className="text-red-600 mt-2">{message}</p>}
    </form>
  );
}
