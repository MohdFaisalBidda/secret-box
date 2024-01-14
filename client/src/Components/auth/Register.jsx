import React, { useState } from 'react'

function Register() {
  const [cred, setCred] = useState({ username: "", pass: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cred);
  };

  return (
    <div>
      <h1>Register</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="Username"
        value={cred.username}
        onChange={(e) => setCred({ ...cred, username: e.target.value })}
      />
      <input
        type="Password"
        value={cred.pass}
        onChange={(e) => setCred({ ...cred, pass: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Register
