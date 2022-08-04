// import formStyles from '../account/form.module.css'

const InputComponent = ({ register, errors, type, placeholder, name, config, labeltext, msgerror }) => {
    return (
        <div className="flex flex-wrap -mx-3 mb-6">
            {labeltext && <label>{labeltext}</label>}
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white" type={type} placeholder={placeholder} {...register(name, config)} />
            {errors[name] && <span >{msgerror}</span>}
        </div>
    )
}

export default InputComponent