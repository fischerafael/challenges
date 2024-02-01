import React, { useRef, useState } from "react";

interface Value {
  id: string;
  value: number;
}

const index = () => {
  const inputRef = useRef<any>(null);
  const [state, setState] = useState<Value[]>([]);

  const addNumber = () => {
    if (inputRef === null) return;
    const currentNumber = inputRef.current.value;
    const id = String(new Date().getTime());
    setState((prev) => [...prev, { id: id, value: Number(currentNumber) }]);
    inputRef.current.value = "";
  };

  //   const sum = calculatTotalFor(state);
  const sum = calculateTotalReduce(state);

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={addNumber}>Adicionar Numero</button>

      {state.map((number) => (
        <p key={number.id}>{number.value}</p>
      ))}

      <p>A soma da lista é: {sum}</p>
    </div>
  );
};

export default index;

const calculatTotalFor = (numbers: number[]) => {
  let count = 0;
  for (let number of numbers) {
    count += number;
  }
  return count;
};

const calculateTotalReduce = (numbers: Value[]) => {
  return numbers.reduce((count, currentNumber) => {
    return currentNumber.value + count;
  }, 0);
};
