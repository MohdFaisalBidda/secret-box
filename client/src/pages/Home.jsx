import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserProvider";
import api from "../services/api";
import { toast } from "react-toastify";
import axios from "axios";

function Home() {
  const { logout } = useContext(UserContext);
  const [allSecrets, setAllSecrets] = useState([]);
  const [secret, setsecret] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    try {
      const fetchSecrets = async () => {
        const res = await api.get(
          `${process.env.REACT_APP_API_URL}/secrets/all`
        );
        setAllSecrets(res.data);
      };
      fetchSecrets();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmitSecret = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(
        `${process.env.REACT_APP_API_URL}/secrets/post-secret`,
        { secret: secret },
        {
          headers: {
            token: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 201) {
        toast.success("Secret posted successfully!");
      } else if (res.status === 200) {
        toast.error("Already Posted the secret!");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error posting secret");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitSecret}>
        <input
          name="secret"
          type="text"
          value={secret}
          onChange={(e) => setsecret(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>

      {allSecrets.map((item)=>(
        <>
        <h1>{item.secret}</h1>
        </>
      ))}
    </div>
  );
}

export default Home;
