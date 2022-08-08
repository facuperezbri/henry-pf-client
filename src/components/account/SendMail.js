import axios from "axios";
import styles from "./SendMail.module.css";
import InputComponent from './../uiComponents/InputComponent'
import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SendMail = () => {
  const { reset, register, handleSubmit, formState: { errors } } = useForm()
  const sucess = () => toast.success("Check your inbox for reset the password")
  const failed = () => toast.error("Invalid email")

  const send = (data) => {
    axios
      .post("http://localhost:4000/api/user/sendReset", {
       email: data.email
      })
      .then(() => {
        sucess()
        reset()
      })
      .catch(() => failed());
  };

  return (
     <form onSubmit={handleSubmit(send)}>
    <div className={styles.container}>
    <ToastContainer/>
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
