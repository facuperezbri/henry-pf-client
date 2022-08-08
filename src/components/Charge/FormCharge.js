import { useForm } from 'react-hook-form'
import Button from '../uiComponents/Button'
import { CREATE_PAYMENT_INTENT } from '../../services/CREATE_PAYMENT_INTENT'
import Card from '../uiComponents/Card'
import InputComponent from '../uiComponents/InputComponent'
import CardText from '../uiComponents/CardText'
const METHODS = ['PAGO RAPIDO', 'FACIL PAGO']


const FormOfCharge = ({ setDataOfCharge, setClientSecret, CVU }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onPaymentIntent = (data) => {
        if (data.amount.includes(',')) {
            return alert('Incorrect format amount')
        }
        CREATE_PAYMENT_INTENT(data.amount, CVU).then((res) => {
            if (res?.msg) {
                return alert(res?.msg)
            }
            setClientSecret(res.clientSecret)
            setDataOfCharge({ ...data, paymentIntentID: res?.paymentIntentID })
        })
    }
    const MIN_CHARGE = 300
    const MAX_CHARGE = 1000000
    return (
        <Card>

        <form onSubmit={handleSubmit(onPaymentIntent)} className='flex flex-col gap-4'>

            <CardText>
                <label htmlFor="cars">Choose a charge method:</label>
                <select id="cars" className='dark:text-stone-800' {...register('chargeMethod', { required: true })}>
                    {
                        METHODS.map((method) => (
                            <option key={method} value={method}>{method}</option>
                        ))
                    }
                </select>
                {errors.chargeMethod && <span>This is required</span>}

            </CardText>
            <div>
                {/* <label>
                    <span>Amount:</span>
                    <input type="number" {...register('amount', { required: true, min: MIN_CHARGE, max: MAX_CHARGE })} min={MIN_CHARGE} max={MAX_CHARGE} step="0.01" />
                    {errors.amount && <span>{`The Amount is required and must be between ${MIN_CHARGE} and ${MAX_CHARGE}`}</span>}
                </label> */}
                <InputComponent labeltext='Amount' register={register} errors={errors} msgerror={`The Amount is required and must be between ${MIN_CHARGE} and ${MAX_CHARGE}`} name='amount' placeholder='Your password' type='number' config={{ required: true, min: MIN_CHARGE, max: MAX_CHARGE }} min={MIN_CHARGE} max={MAX_CHARGE} step="0.01" />

            </div>
            <div className='grid place-content-center'>
                <Button type="submit">
                    Charge
                </Button>
            </div>
        </form>
        </Card>
    )
}

export default FormOfCharge
