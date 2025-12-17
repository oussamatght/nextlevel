import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    const { amount } = await req.json();

    if (!amount) return new Response("Amount missing", { status: 400 });

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, // in cents
            currency: "usd",
        });

        return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
            status: 200,
        });
    } catch (err) {
        console.error(err);
        return new Response("Stripe Error", { status: 500 });
    }
}