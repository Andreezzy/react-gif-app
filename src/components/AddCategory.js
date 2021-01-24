import React, { useState } from 'react'
import PropTypes from 'prop-types';

//props = { value: value }
//{ value } = props

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 2){
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue('');
    }
    //console.log("Submit realizado");
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}