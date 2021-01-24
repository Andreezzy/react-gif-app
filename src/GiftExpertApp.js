import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])
  
  // const handleAdd = () => {
  //   //setCategories([...categories, 'HunterXHunter'])
  //   setCategories((categories) => [...categories, 'HunterXHunter'])
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr/>

      <AddCategory setCategories={ setCategories }></AddCategory>

      <ol>
        {
          categories.map((category, i) => (
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </>
  );
};