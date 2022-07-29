export const CREATE_PAYMENT_INTENT = async (amount) => {
    try {
        const res = await fetch("http://localhost:4000/api/movement/create_payment_intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount }),
        })
        const resJson = await res.json()
        return resJson
    } catch (error) {
        throw new Error(error)
    }
}