import React from "react";
import PropTypes from 'prop-types';
import Dog from "./Dog";

const DogList = (props) => {
  return (
      <ul className='DogList'>
        {
          props.dogs.map((dog, i) => {
            return <Dog
                name={dog.name}
                favoriteToy={dog.favoriteToy}
                chipNumber={dog.chipNumber}
                key={i}
              />
          })
        }
      </ul>
  );
};

DogList.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      favoriteToy: PropTypes.string,
      chipNumber: PropTypes.string
    })
  )
}

export default DogList;
