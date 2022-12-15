import React from "react";
import PropTypes from "prop-types";

const Dog = (props) => {
  return (
    <li className='dog' id={props.chipNumber}>
      <h3>
        Dog: {props.name}, ID: {props.id}
      </h3>
      <h4>No. of Pets: {props.petCount}</h4>
      <button onClick={(event) => props.onUpdatePetCount(props.id)}>
        Pet {props.name}!
      </button>
      <ul>
        <li>Favorite Toy: {props.favoriteToy}</li>
        <li>Chip Number: {props.chipNumber}</li>
      </ul>
    </li>
  );
};

Dog.propTypes = {
  id: PropTypes.number.isRequired,
  petCount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  favoriteToy: PropTypes.string.isRequired,
  chipNumber: PropTypes.string.isRequired,
  onUpdatePetCount: PropTypes.func.isRequired,
};

export default Dog;
