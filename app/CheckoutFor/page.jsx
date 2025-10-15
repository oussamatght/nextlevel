"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./_components/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutFor() {
  const searchParams = useSearchParams();
  const totalParam = searchParams?.get("total");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

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
        console.error("Stripe clientSecret fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchClientSecret();
  }, [totalParam]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-700">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-indigo-600 mb-4"></div>
        <p className="text-sm font-medium">Preparing secure checkout...</p>
      </div>
    );

  if (!clientSecret)
    return (
      <div className="text-center mt-20 text-red-600 font-semibold">
        ⚠️ Payment setup failed. Please try again later.
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Secure Checkout
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Complete your purchase safely
        </p>

        <div className="text-center mb-6">
          <span className="inline-block bg-green-100 text-green-700 font-semibold text-lg px-5 py-2 rounded-full">
            Total: ${totalParam}
          </span>
        </div>

        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>

        <p className="text-xs text-gray-400 mt-6 text-center">
          🔒 Your payment is encrypted and processed securely via Stripe
        </p>
      </div>
    </div>
  );
}
