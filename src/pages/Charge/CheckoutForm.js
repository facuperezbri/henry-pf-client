import styles from  './CheckoutForm.module.css'
import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { CHARGE_ACCOUNT } from '../../services/CHARGE_ACCOUNT';

export default function CheckoutForm({ handlerCancelCharge, dataOfCharge }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);
    const res = await CHARGE_ACCOUNT({ amount: dataOfCharge.amount, chargeMethod: dataOfCharge.chargeMethod, cvu: dataOfCharge.cvu })

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/charge`
      }
    })

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
    alert(res?.msg)
  };
  return (
    <div className={styles.form}>

    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement className={styles.payment_element} />
      <button disabled={isLoading || !stripe || !elements} id="submit" className={styles.button_stripe}>
        <span id="button-text">
          {isLoading ? <div className={styles.spinner} id="spinner"></div> : "Confirm"}
        </span>
      </button>

    </form>
      <button onClick={handlerCancelCharge} className={styles.button_stripe_cancel}>Cancel</button>
      {message && <div className={styles.payment_message} >{message}</div>}
    </div>
  );
}
