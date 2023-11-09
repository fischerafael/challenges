import React, { useState } from "react";

export const CountLetters = () => {
  const [input, setInput] = useState("");

  const counter = countCharacters(input);
  console.log("counter ", counter);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        background: "black",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <input
        style={{ borderWidth: "1px", height: "32px", borderColor: "pink" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

const countCharacters = (string: string): Record<string, number> => {
  const sanitizedString = string.trim().split(" ").join("").split("");
  const result = sanitizedString.reduce((counterObject, currentLetter) => {
    const hasLetter = !!counterObject[currentLetter];
    // if (hasLetter) {
    //   return {
    //     ...counterObject,
    //     [currentLetter]: counterObject[currentLetter] + 1,
    //   };
    // }
    // return {
    //   ...counterObject,
    //   [currentLetter]: 1,
    // };
    if (hasLetter) {
      counterObject[currentLetter] = counterObject[currentLetter] + 1;
      return counterObject;
    }
    counterObject[currentLetter] = 1;
    return counterObject;
  }, {} as Record<string, number>);
  return result;
};
