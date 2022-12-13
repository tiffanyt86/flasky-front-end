import React from "react";

import Cat from "./Cat";

const CatList = (props) => {
  return (
    <>
      <h2>Number of Cats: {props.catData.length}</h2>
      <ul>
        {props.catData.map((cat, i) => (
          <Cat
            name={cat.name}
            personality={cat.personality}
            caretaker={cat.caretaker}
            color={cat.color}
            key={i}
          />
        ))}
      </ul>
    </>
  );
};

export default CatList;
