export const fetchClientSecret = async () => {
  const res = await fetch("/api/create-checkout-session", { method: "POST" });
  if (!res.ok) throw new Error("Failed to create checkout session");
  const data = await res.json();
  return data.checkoutSessionClientSecret;
};
