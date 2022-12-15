import React from "react";
import PropTypes from "prop-types";
import Dog from "./Dog";

const DogList = (props) => {
  return (
    <ul className='DogList'>
      {props.dogs.map((dog, i) => {
        return (
          <Dog
            name={dog.name}
            favoriteToy={dog.favoriteToy}
            chipNumber={dog.chipNumber}
            key={i}
            id={dog.id}
            petCount={dog.petCount}
            onUpdatePetCount={props.onUpdatePetCount}
          />
        );
      })}
    </ul>
  );
};

DogList.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      petCount: PropTypes.number,
      name: PropTypes.string,
      favoriteToy: PropTypes.string,
      chipNumber: PropTypes.string,
    })
  ),
  onUpdatePetCount: PropTypes.func.isRequired,
};

export default DogList;
