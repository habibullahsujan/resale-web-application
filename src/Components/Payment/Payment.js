import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);


const Payment = () => {
  const product = useLoaderData();
  const { productName, price } = product;
  const location =useLocation();
  const bookedProductId=location?.state;

  return (
    <div>
      <h1 className="text-lg font-semibold text-blue-500 text-center">
        Your payment for {productName} and amount is ${price}
      </h1>
      <div className="w-2/5 my-10 p-4 mx-auto border border-sky-200 rounded-lg">
      <Elements stripe={stripePromise} >
        <CheckoutForm product={product} bookedProductId={bookedProductId} />
      </Elements>
      </div>
    </div>
  );
};

export default Payment;
