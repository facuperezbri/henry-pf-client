import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CheckoutForm from "./CheckoutForm"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import { useNavigate } from "react-router-dom"
import { getUser } from '../../redux/actions';
import { CANCEL_PAYMENT_INTENT } from '../../services/CANCEL_PAYMENT_INTENT'
import CardDataOfCharge from "./CardDataOfCharge"
import FormOfCharge from "./FormCharge";
import CardText from "../uiComponents/CardText";
import UseDarkMode from "../../hooks/useDarkMode";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

function Charge () {
    const { darkMode } = UseDarkMode()
    const dispatch = useDispatch()

    const dataProfile = useSelector(state => state.userData)


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

        !dataProfile?.accounts && dispatch(getUser((window.localStorage.getItem("token"))))
        const status = new URLSearchParams(window.location.search).get(
            "redirect_status"
        );
        setStatusCharge(status)
    }, [])


    const appearance = {
        theme: darkMode ? 'night' : 'minimal',
    };
    const options = {
        clientSecret,
        appearance,
    }

    const handerAceptSuccess = () => {
        navigate('/charge')
        setStatusCharge('')
    }

    if (!dataProfile?.accounts) {
        return <div>Loading...</div>
    }

    return (
        <div className="w-full flex justify-center gap-4 py-4">
            <div className="flex flex-col gap-4">

                <CardDataOfCharge amount={dataOfCharge?.amount} cvu={dataOfCharge?.cvu} method={dataOfCharge?.chargeMethod} dataProfile={dataProfile} />
                {
                    !dataOfCharge && <FormOfCharge setDataOfCharge={setDataOfCharge} setClientSecret={setClientSecret} CVU={dataProfile?.accounts[0].cvu} />
                }
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm handlerCancelCharge={handlerCancelCharge} dataOfCharge={dataOfCharge} CVU={dataProfile?.accounts[0].cvu} />
                    </Elements>
                )}
                {
                    statusCharge && <div><CardText onClick={handerAceptSuccess}>Status: {statusCharge}</CardText></div>
                }
            </div>
        </div>
    )
}

export default Charge