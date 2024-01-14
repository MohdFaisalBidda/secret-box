import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [cred, setCred] = useState({ username: "", pass: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        cred
      );
      if (res.status === 201) {
        navigate("/login");
        toast.success("User registered successfully!");
      }else{
        toast.error("Something Went Wrong");
      }
      console.log("cred: ", cred);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="Username"
          value={cred.username}
          onChange={(e) => setCred({ ...cred, username: e.target.value })}
        />
        <input
          name="password"
          type="Password"
          value={cred.password}
          onChange={(e) => setCred({ ...cred, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
