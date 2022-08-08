// import formStyles from '../account/form.module.css'

const InputComponent = ({
  register,
  errors,
  type,
  placeholder,
  name,
  config,
  labeltext,
  msgerror,
  min,
}) => {
  return (
    <div className="flex flex-wrap mb-6 w-full">
      {labeltext && (
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-300">
          {labeltext}
        </label>
      )}
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-slate-900 border rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        type={type}
        placeholder={placeholder}
        min={min}
        {...register(name, config)}
      />
      {errors[name] && <span>{msgerror}</span>}
    </div>
  );
};

export default InputComponent;
