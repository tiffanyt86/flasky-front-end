import React, { useState } from 'react';

const NewCatForm = ({ handleCatSubmit }) => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCatSubmit(name);
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Cat Name: </label>
      <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
      <div><input type="submit" value="Add a Cat" /></div>
    </form>
  )
}

export default NewCatForm;