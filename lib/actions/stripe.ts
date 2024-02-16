"use server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SK!);

export async function checkout(
	email: string,
	priceId: string,
	redirectTo: string
) {
	return JSON.stringify(
		await stripe.checkout.sessions.create({
			success_url: redirectTo || process.env.SITE_URL,
			cancel_url: process.env.SITE_URL,
			customer_email: email,
			line_items: [{ price: priceId, quantity: 1 }],
			mode: "subscription",
		})
	);
}
