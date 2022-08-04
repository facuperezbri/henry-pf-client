import formStyles from './form.module.css'

export const InputComponent = ({ register, errors, type, placeholder, name, config }) => {
    return (
        <div className="flex flex-wrap -mx-3 mb-6">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white" type={type} placeholder={placeholder} {...register(name, config)} />
            {errors[name] && <span className={formStyles.input_error}>This field is required</span>}
        </div>
    )
}