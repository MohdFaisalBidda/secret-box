import React, { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function PasswordReset() {
  const navigate = useNavigate();
  const [resetCred, setResetCred] = useState({
    username: "",
    currPassword: "",
    newPassword: "",
  });

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(
        `${process.env.REACT_APP_API_URL}/auth/reset`,
        resetCred
      );

      if (res.status === 200) {
        toast.success("Password reset successfully!");
        navigate("/login");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };
  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleReset}>
        <input
          name="username"
          type="Username"
          value={resetCred.username}
          onChange={(e) =>
            setResetCred({ ...resetCred, username: e.target.value })
          }
        />
        <input
          name="currPassword"
          type="Current Password"
          value={resetCred.currPassword}
          onChange={(e) =>
            setResetCred({ ...resetCred, currPassword: e.target.value })
          }
        />
        <input
          name="newPassword"
          type="New Password"
          value={resetCred.newPassword}
          onChange={(e) =>
            setResetCred({ ...resetCred, newPassword: e.target.value })
          }
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default PasswordReset;
