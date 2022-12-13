import React from "react";
import PropTypes from 'prop-types';

const Dog = (props) => {
  return (
    <li className="dog" id={props.chipNumber}>
      <h3>Dog: {props.name}</h3>
      <ul>
        <li>Favorite Toy: {props.favoriteToy}</li>
        <li>Chip Number: {props.chipNumber}</li>
      </ul>
    </li>
  );
};

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  favoriteToy: PropTypes.string.isRequired,
  chipNumber: PropTypes.string.isRequired
};

export default Dog;
