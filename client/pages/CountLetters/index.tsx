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
        flexDirection: "column",
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

      {Object.entries(counter).map(([key, value]) => {
        return (
          <div key={key}>
            <p style={{ color: "white" }}>Letter: {key}</p>
            <p style={{ color: "white" }}>{value}</p>
          </div>
        );
      })}
    </div>
  );
};

const countCharacters = (string: string): Record<string, number> => {
  const stringArray = string.trim().split(" ").join("").split("");
  return stringArray.reduce((counterObject, currentItem) => {
    counterObject[currentItem] = !!counterObject[currentItem]
      ? counterObject[currentItem] + 1
      : 1;
    return counterObject;
  }, {} as Record<string, number>);
};
