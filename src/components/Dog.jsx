import { useState } from 'react';
import PropTypes from 'prop-types';
// cuteness level
// name, age
// breed

const Dog = (props) => {
    // const [petCount, setPetCount] = useState(0);

    // const handleOnClickPets = () => {
    //     setPetCount((petCount) => petCount + 1);
    // }
    // props.key => value
    return (<div>
        <ul>
            {props.name}
            <li>age: {props.age}</li>
            <li>breed: {props.breed}</li>
            <li>cuteness Level: {props.cuteness}</li>
            <li>pet count: {props.petCount}</li>
        </ul>
        <button onClick={() => props.onPetDog(props.id)}> Pet {props.name}</button>
    </div>);
}

Dog.propTypes = {
    breed: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    cuteness: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    petCount: PropTypes.number.isRequired,
    onPetDog: PropTypes.func.isRequired
};


export default Dog;