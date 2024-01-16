import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setUser(storedToken);
    }
  }, []);

  const login = async (userData) => {
    try {
      setIsLoading(true);
      const res = await api.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        userData
      );
      console.log("data from provider", res.data);
      setUser(res.data);
      localStorage.setItem("token", JSON.stringify(res.data));
      toast.success("Logged In Successfully!");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error(error.response.data);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
