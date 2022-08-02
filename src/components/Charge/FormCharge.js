import { useForm } from 'react-hook-form'
import { CREATE_PAYMENT_INTENT } from '../../services/CREATE_PAYMENT_INTENT'
const METHODS = ['PAGO RAPIDO', 'FACIL PAGO']


const FormOfCharge = ({ setDataOfCharge, setClientSecret, setUserToCharge }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onPaymentIntent = (data) => {
        if (data.amount.includes(',')) {
            return alert('Incorrect format amount')
        }
        CREATE_PAYMENT_INTENT(data.amount, data.cvu).then((res) => {
            if (res?.msg) {
                return alert(res?.msg)
            }
            setUserToCharge(res?.account?.users)
            setClientSecret(res.clientSecret)
            setDataOfCharge({ ...data, paymentIntentID: res?.paymentIntentID })
        })
    }
    const MIN_CHARGE = 300
    const MAX_CHARGE = 1000000
    return (
        <form onSubmit={handleSubmit(onPaymentIntent)}>

            <div>
                <label htmlFor="cars">Choose a car:</label>
                <select id="cars"  {...register('chargeMethod', { required: true })}>
                    {
                        METHODS.map((method) => (
                            <option key={method} value={method}>{method}</option>
                        ))
                    }
                </select>
                {errors.chargeMethod && <span>This is required</span>}

            </div>
            <div>
                <label>
                    <span>CVU:</span>
                    <input type="text" name="cvu" {...register('cvu', { required: true, minLength: 8 })} />
                    {errors.cvu && <span>CVU is required and min length must be 8.</span>}

                </label>
                <label>
                    <span>Amount:</span>
                    <input type="number" {...register('amount', { required: true, min: MIN_CHARGE, max: MAX_CHARGE })} min={MIN_CHARGE} max={MAX_CHARGE} step="0.01"></input>
                    {errors.amount && <span>{`The Amount is required and must be between ${MIN_CHARGE} and ${MAX_CHARGE}`}</span>}
                </label>
            </div>
            <button type="submit">
                Charge
            </button>
        </form>
    )
}

export default FormOfCharge
