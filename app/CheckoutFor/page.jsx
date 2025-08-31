"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import Animation from "../components/animation ";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutFor() {
  const searchParams = useSearchParams();
  const totalParam = searchParams?.get("total"); 
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (!totalParam) return;
    const fetchClientSecret = async () => {
      try {
        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: Number(totalParam) * 100 }),
        });
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.error("code fachled", err);
      }
    };
    fetchClientSecret();
  }, [totalParam]);

  if (!clientSecret) return <Animation/>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl text-center font-bold mb-4"> Checkout</h1>
      <p className="mb-4 text-green-500 text-xl text-center ">Total: ${totalParam}</p>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm clientSecret={clientSecret} />
      </Elements>
    </div>
  );
}
