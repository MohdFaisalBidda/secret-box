import React, { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

function PasswordReset() {
  const [resetPass, setResetPass] = useState({
    currPassword: "",
    newPassword: "",
  });

  const handleReset = async (e) => {
  
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleReset}>
        <input
          name="currPassword"
          type="Current Password"
          value={resetPass.currPassword}
          onChange={(e) =>
            setResetPass({ ...resetPass, currPassword: e.target.value })
          }
        />
        <input
          name="newPassword"
          type="New Password"
          value={resetPass.newPassword}
          onChange={(e) =>
            setResetPass({ ...resetPass, newPassword: e.target.value })
          }
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default PasswordReset;
