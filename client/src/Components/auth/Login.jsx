import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import { Link } from "react-router-dom";

function Login() {
  const [cred, setCred] = useState({ username: "", password: "" });
  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(cred);
      console.log("cred: ", cred);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
      <Link to="/reset">Reset password</Link>
    </div>
  );
}

export default Login;
