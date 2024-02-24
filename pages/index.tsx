import React, { useEffect, useState } from "react";

const index = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // estado derivado
  const fullName = `${firstName} ${lastName}`;

  return (
    <div>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <button>Submit</button>

      <div>{fullName}</div>
    </div>
  );
};

export default index;
