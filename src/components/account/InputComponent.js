import formStyles from './form.module.css'

export const InputComponent = ({ register, errors, type, placeholder, name, config }) => {
    return (
        <div className={formStyles.input_container}>
            <input className={formStyles.input_text} type={type} placeholder={placeholder} {...register(name, config)} />
            {errors[name] && <span className={formStyles.input_error}>This field is required</span>}
        </div>
    )
}