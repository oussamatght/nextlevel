"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutFor/page.jsx"; 
import { useEffect, useState } from "react";
import axios from "axios";
import Animation from "../components/animation .jsx";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const res = await axios.post("/api/create-payment-intent", {
          amount: 1000, 
        });
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.error("Stripe Error:", err);
      }
    };

    fetchClientSecret();
  }, []);

  if (!clientSecret) return <Animation/>;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
