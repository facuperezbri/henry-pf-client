export const CANCEL_PAYMENT_INTENT = async (paymentIntentID) => {
    try {
        const res = await fetch("http://localhost:4000/api/movement/cancel_payment_intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ paymentIntentID }),
        })
        const resJson = await res.json()
        return resJson
    } catch (error) {
        throw new Error(error)
    }
}