import React from "react";

function SecretCard({ secret }) {
  return (
    <div>
      <h1>{secret.secret}</h1>
    </div>
  );
}

export default SecretCard;
