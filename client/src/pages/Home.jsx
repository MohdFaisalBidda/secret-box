import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Modal from "../Components/Modal";
import SecretCard from "../Components/SecretCards";
import axios from "axios";

function Home() {
  const [allSecrets, setAllSecrets] = useState([]);
  const [currentUser, setCurrUser] = useState("");
  const token = localStorage.getItem("token");
  const parsedToken = JSON.parse(token);
  const [isModalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const fetchSecrets = async () => {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/secrets/all`
        );
        setAllSecrets(res.data);
      };
      fetchSecrets();
    } catch (error) {
      console.log(error);
    }
    setCurrUser(parsedToken.username);
  }, [parsedToken.secret]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNewSecret = (newSecret) => {
    setAllSecrets((prevSecrets) => [newSecret, ...prevSecrets]);
  };

  return (
    <div>
      <Navbar setSearch={setSearch} search={search} />
      <div className="container mx-auto p-8 w-fit">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Hii👋 {currentUser}
        </h1>
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to SecretBox
        </h1>
        <p className="text-lg mb-8 w-fit">
          Share your secrets anonymously and discover what others are hiding!
        </p>
        <button
          onClick={handleOpenModal}
          disabled={parsedToken.secret}
          className={`text-white rounded-lg p-3 w-full ${
            parsedToken.secret ? "bg-black/50" : "bg-black cursor-pointer"
          }`}
        >
          <span className="text-lg font-bold">
            {parsedToken.secret ? "Already Shared the secret!" : "Share Secret"}
          </span>
        </button>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onNewSecret={handleNewSecret}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center items-center px-14 w-full gap-20 my-10 max-w-full">
        {allSecrets
          .filter((item) => item.secret.includes(search))
          .map((secretItem) => {
            if (secretItem.secret) {
              return <SecretCard key={secretItem._id} secret={secretItem} />;
            }
          })}
      </div>
    </div>
  );
}

export default Home;
