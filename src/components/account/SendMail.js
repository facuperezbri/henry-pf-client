import axios from "axios";
import styles from "./SendMail.module.css";
import InputComponent from './../uiComponents/InputComponent'
import { useForm } from 'react-hook-form'


const SendMail = () => {
  const { reset, register, handleSubmit, formState: { errors } } = useForm()

  const send = (data) => {
    console.log(data)
    axios
      .post("http://localhost:4000/api/user/sendReset", {
       email: data.email
      })
      .then(() => {
        alert("Check your inbox for reset the password")
        reset()
      })
      .catch(() => alert("invalid email"));
  };


  return (
     <form onSubmit={handleSubmit(send)}>
    <div className={styles.container}>
      
      <InputComponent
        register={register}
        errors={errors}
        msgerror='This field is required'
        name='email'
        placeholder="Enter your email for reset"
        type="email"
        config={{ required: true, minLength: 8 }}
      />

      <button type='submit' className={styles.btn}>
        Send
      </button>
    </div>
    </form>
  );
};

export default SendMail;
