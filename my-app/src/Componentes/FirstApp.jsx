import PropTypes from 'prop-types';
import { useState} from "react"
import React from 'react';
import {categories} from '../Componentes/ComponentApp';

 
const ChildComponent = ({ addCategory, getGifs }) => {
  const [category, setCategory] = useState('');


  const handleInput = (event) => {
    setCategory(event.target.value);


  };

  const handleAddCategory = async () => {

    addCategory(category);
    setCategory('');
    await getGifs(category);

  };

  return (

    <div>

      <input type="text" value={category} onChange={handleInput} />
      <button onClick={handleAddCategory}>Agregar categoría</button>

    </div>


  );

};

const FirstApp = () => {

  const [categories, setCategories] = useState([]);

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const getGifs = async (category) => {
    
  };

  return (

    <div>

      <ChildComponent addCategory={addCategory} getGifs={getGifs} />
      <ul>

        {categories.map((category, index) => (
          <li key={index}>{category}</li>

        ))}

      </ul>

    </div>
  );
};

export default FirstApp;

  
  