import axios from "axios";
import React, { useState } from "react";

const NewCatForm = (props) => {
  const [nameData, setNameData] = useState("");

  const onChangeHandler = (event) => {
    setNameData(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {
      name: nameData,
      personality: "spicy",
      color: "blue",
    };

    axios
      .post("http://127.0.0.1:5000/cats", formData)
      .then((response) => {
        console.log(response);
        props.onGetAllCats();
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label for='nameInput'>Name</label>
      <input
        name='nameInput'
        type='text'
        onChange={onChangeHandler}
        value={nameData}
      />
      <button type='submit'>Add Cat</button>
    </form>
  );
};

export default NewCatForm;
