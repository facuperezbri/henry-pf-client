import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const email = useParams();
  const sucess = () => toast.success("Reset password sucessfully");
  const failed = () => toast.error("Email reset failed");

  const resetPws = async () => {
    console.log(email);
    await axios
      .put("http://localhost:4000/api/user/reset-password", {
        email: email.id,
        password: password,
      })
      .then(() => sucess())
      .then(() =>
        setTimeout(() => {
          navigate("/");
        }, 3000)
      )
      .catch(() => {
        failed();
      });
  };

  return (
    <>
      <ToastContainer />
      <div>
        <h1>Reset Password</h1>
        <div>
          <input
            type="text"
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="text" placeholder="repeat new Password" />
        </div>
        <button onClick={resetPws}>Change</button>
      </div>
    </>
  );
};

export default ResetPassword;
