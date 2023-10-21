import { useState } from "react";

export const RevertStringFor = () => {
  const [string, setString] = useState<string>("");

  const reversedString = reverseStringTypescript(string);

  return (
    <div>
      <input
        placeholder="Type your string"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />

      <div>
        <p>{reversedString}</p>
      </div>
    </div>
  );
};

const reverseStringTypescript = (string: string): string =>
  string.split("").reverse().join("");

const reverseStringWithForLoop = (string: string): string => {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};
