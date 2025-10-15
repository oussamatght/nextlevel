"use client";

import React, { useState } from "react";
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
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-4 rounded-lg border border-gray-200"
    >
      <PaymentElement className="p-3 rounded-lg border border-gray-300" />
      <button
        type="submit"
        disabled={loading || !stripe || !elements}
        className={`w-full px-5 py-3 rounded-lg text-white font-semibold transition-all duration-200 ${
          loading || !stripe || !elements
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg"
        }`}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {message && (
        <p className="text-red-600 text-sm text-center font-medium">{message}</p>
      )}
    </form>
  );
}
