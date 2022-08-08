import { useState } from "react";
import axios from "axios";
import styles from "./SendMail.module.css";

const SendMail = () => {
  const [email, setEmail] = useState();

  const send = async () => {
    const mail = await axios.post("http://localhost:4000/api/user/sendReset", {
      email,
    });
    const emaildata = mail.data;
    console.log(emaildata);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <div className={styles.container}>
      
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-slate-900 border rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        name={"Reset"}
        placeholder="Enter your email for reset"
        min= {8}
        onChange={(e) => handleOnChange(e)}
      />
      <button onClick={send} className={styles.btn}>
        Send
      </button>
    </div>
  );
};

export default SendMail;
