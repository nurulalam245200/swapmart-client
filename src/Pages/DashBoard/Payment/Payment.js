import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
  const buying = useLoaderData();
  const { price } = buying;

  return (
    <div>
      <h1>{price}</h1>
    </div>
    //  <div>
    //    <h2 className="text-4xl">
    //      Payment for <strong className="text-success"> {treatment}</strong>
    //    </h2>
    //    <p>
    //      Please Pay <strong> ${price}</strong> appointment on {appointmentDate}{" "}
    //      at {slot}
    //    </p>
    //    <div className="w-96 my-12">
    //      <Elements stripe={stripePromise}>
    //        <CheckoutFrom booking={buying}></CheckoutFrom>
    //      </Elements>
    //    </div>
    //  </div>
  );
};

export default Payment;
