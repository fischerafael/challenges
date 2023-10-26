import React, { useState } from "react";

type Lists = "left" | "right";

interface IItem {
  id: string;
  list: Lists;
  isChecked: boolean;
}

interface IState {
  listItems: IItem[];
}

export const ReactMetaChallenge = () => {
  const [state, setState] = useState<IState>({
    listItems: INITIAL_LIST_ITEMS,
  });

  const leftListItems = state.listItems.filter(
    (listItem) => listItem.list === "left"
  );

  const rightListItems = state.listItems.filter(
    (listItem) => listItem.list === "right"
  );

  const handleToggleCheck = (listItemId: string) => {
    const updatedList = state.listItems.map((item) => {
      if (item.id === listItemId) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      }
      return item;
    });
    setState((prev) => ({ ...prev, listItems: updatedList }));
  };

  const moveItemsTo = (destinationList: Lists, originalList: Lists) => {
    const updatedList = state.listItems.map((item) => {
      const itemShouldBeMoved =
        item.isChecked === true && item.list === originalList;
      if (itemShouldBeMoved) {
        return { ...item, list: destinationList, isChecked: false };
      }
      return item;
    });
    setState((prev) => ({ ...prev, listItems: updatedList }));
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
      }}
    >
      <ItemList handleToggle={handleToggleCheck} list={leftListItems} />

      <div
        style={{
          display: "flex",
          gap: "32px",
        }}
      >
        <button onClick={() => moveItemsTo("left", "right")}>{"<"}</button>
        <button onClick={() => moveItemsTo("right", "left")}>{">"}</button>
      </div>

      <ItemList handleToggle={handleToggleCheck} list={rightListItems} />
    </div>
  );
};

interface ItemProps {
  id: string;
  isChecked: boolean;
  handleToggle: (id: string) => void;
}

const Item = ({ handleToggle, id, isChecked }: ItemProps) => {
  return (
    <label key={id}>
      <p>{id}</p>
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={() => handleToggle(id)}
      />
    </label>
  );
};

const ItemList = ({
  list,
  handleToggle,
}: {
  list: IItem[];
  handleToggle: (id: string) => void;
}) => {
  return (
    <div
      style={{
        padding: "32px",
        borderWidth: "1px",
        minHeight: "400px",
        width: "200px",
      }}
    >
      {list.map((item) => (
        <Item
          key={item.id}
          handleToggle={handleToggle}
          id={item.id}
          isChecked={item.isChecked}
        />
      ))}
    </div>
  );
};

const INITIAL_LIST_ITEMS: IItem[] = [
  {
    id: "1",
    isChecked: true,
    list: "left",
  },
  {
    id: "2",
    isChecked: false,
    list: "right",
  },
  {
    id: "3",
    isChecked: false,
    list: "left",
  },
  {
    id: "4",
    isChecked: false,
    list: "left",
  },
];
