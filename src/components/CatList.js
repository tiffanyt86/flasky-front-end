import React from "react";
import PropTypes from 'prop-types';

import Cat from "./Cat";

const CatList = (props) => {
  return (
    <>
      <h2>Number of Cats: {props.catData.length}</h2>
      <ul>
        {props.catData.map((cat) => (
          <Cat
            name={cat.name}
            id={cat.id}
            personality={cat.personality}
            caretaker={cat.caretaker}
            color={cat.color}
            petCount={cat.petCount}
            key={cat.id}
            onPetCat={props.onPetCat}
          />
        ))}
      </ul>
    </>
  );
};

CatList.propTypes = {
  catData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    caretaker: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    personality: PropTypes.string.isRequired,
    petCount: PropTypes.number.isRequired, 
  })),
  onPetCat: PropTypes.func.isRequired,
};

export default CatList;
