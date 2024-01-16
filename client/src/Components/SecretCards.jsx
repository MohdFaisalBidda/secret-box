import React from "react";

function SecretCard({ secret }) {
  return (
    <div className="p-6 bg-violet-500/70 shadow-xl shadow-violet-200 text-white rounded-xl">
      <h1 className="text-lg fon">{secret.secret}</h1>
    </div>
  );
}

export default SecretCard;
