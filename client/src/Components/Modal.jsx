import React, { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const Modal = ({ isOpen, onClose, onNewSecret }) => {
  const [secret, setsecret] = useState("");
  const token = localStorage.getItem("token");
  const parsedToken = JSON.parse(token);

  const handleSubmitSecret = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(
        `${process.env.REACT_APP_API_URL}/secrets/post-secret`,
        { secret: secret },
        {
          headers: {
            token: `Bearer ${parsedToken.token}`,
          },
        }
      );

      if (res.status === 201) {
        toast.success("Secret posted successfully!");
        localStorage.setItem(
          "token",
          JSON.stringify({ ...parsedToken, secret: secret })
        );
        onNewSecret(res.data);
        console.log(res.data);
      } else if (res.status === 200) {
        toast.error("Already Posted the secret!");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error posting secret");
    } finally {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-md shadow-md w-1/2">
        <div className="flex justify-between w-full">
          <h2 className="text-2xl font-bold mb-4">Share Your Secret</h2>
          <h2
            onClick={onClose}
            className="text-2xl font-bold mb-4 cursor-pointer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="26px"
              width="26px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
            </svg>
          </h2>
        </div>
        <form onSubmit={handleSubmitSecret}>
          <div className="flex flex-col justify-end">
            <textarea
              rows={4}
              name="secret"
              type="text"
              value={secret}
              onChange={(e) => setsecret(e.target.value)}
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <div className=" mt-4">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
