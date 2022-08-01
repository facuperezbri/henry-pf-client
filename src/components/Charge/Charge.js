import React, { useState, useEffect } from "react";
import CheckoutForm from "./CheckoutForm"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import { useNavigate } from "react-router-dom"
import { CANCEL_PAYMENT_INTENT } from '../../services/CANCEL_PAYMENT_INTENT'
import CardDataOfCharge from "./CardDataOfCharge"
import FormOfCharge from "./FormCharge";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

function Charge() {

    const [dataOfCharge, setDataOfCharge] = useState()
    const [clientSecret, setClientSecret] = useState("")
    const [statusCharge, setStatusCharge] = useState("")
    const navigate = useNavigate()

    const handlerCancelCharge = () => {
        CANCEL_PAYMENT_INTENT(dataOfCharge.paymentIntentID).then((res) => {
            alert(res.message)
            setDataOfCharge()
            setClientSecret('')
        }).then(console.error)
    }
    useEffect(() => {
        const status = new URLSearchParams(window.location.search).get(
            "redirect_status"
        );
        setStatusCharge(status)
    }, [])


    const appearance = {
        theme: 'minimal',
    };
    const options = {
        clientSecret,
        appearance,
    }

    const handerAceptSuccess = () => {
        navigate('/charge')
        setStatusCharge('')
    }

    return (
        <div>
            {
                !dataOfCharge && <FormOfCharge setDataOfCharge={setDataOfCharge} setClientSecret={setClientSecret} />
            }
            {
                dataOfCharge && <CardDataOfCharge amount={dataOfCharge?.amount} cvu={dataOfCharge?.cvu} method={dataOfCharge?.chargeMethod} />

            }
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm handlerCancelCharge={handlerCancelCharge} dataOfCharge={dataOfCharge} />
                </Elements>
            )}
            {
                statusCharge && <div>{statusCharge} <button onClick={handerAceptSuccess}>Ok</button></div>
            }
        </div>
    )
}

export default Charge