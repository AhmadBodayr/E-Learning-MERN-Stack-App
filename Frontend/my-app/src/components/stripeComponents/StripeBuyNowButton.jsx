import React from 'react'
import { useContext } from 'react'
import CurrentViewContext from '../../context/CurrentViewContext'
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        // Should be placed in .env file
        // process.env.REACT_APP_STRIPE_KEY = pk_test_QQhLQwKIIpDlvcn6anSihGjm00LudBbErJ
        stripePromise = loadStripe("pk_test_QQhLQwKIIpDlvcn6anSihGjm00LudBbErJ");
    }

    return stripePromise;
};


const StripeBuyNowButton = () => {
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    // To be fetched from the db (price_1MGgdHGOs1abJdWNyzLlNkH2)
    const item = {
        price: "price_1MGgdHGOs1abJdWNyzLlNkH2",
        quantity: 1
    };

    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/successful_payment`,
        cancelUrl: `${window.location.origin}/cancel_payment`
    };

    const redirectToCheckout = async () => {
        setLoading(true);
        console.log("redirectToCheckout");

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error);

        if (error) setStripeError(error.message);
        setLoading(false);
    };

    if (stripeError) alert(stripeError);

    const { view, setView } = useContext(CurrentViewContext);

    return (
        <button
            onClick={redirectToCheckout}
            disabled={isLoading} type="button" className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-blue-700 hover:text-white rounded-lg"
            >
            Buy with credit card
        </button>
    )
}

export default StripeBuyNowButton