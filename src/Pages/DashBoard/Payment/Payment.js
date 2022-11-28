import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheackoutFrom from "./CheackoutFrom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
  const buying = useLoaderData();
  const { price, productName } = buying;

  return (
    <div>
      <h2 className="text-4xl">
        Buy <strong className="text-success"> {productName}</strong>
      </h2>
      <p>Price: {price}</p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheackoutFrom buying={buying}></CheackoutFrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
