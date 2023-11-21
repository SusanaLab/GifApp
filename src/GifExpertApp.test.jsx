
import React, { useState } from 'react';
import { GifGrid } from '../src/components/GifGrid';
import { AddCategory } from '../src/components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['developer']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const onDeleteCategory = (categoryToDelete) => {
    setCategories(categories.filter((category) => category !== categoryToDelete));
  };

  return (
    <>
      <div className='header'> <h1>Gif Fav</h1></div>


      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
          onDeleteCategory={onDeleteCategory}
        />
      ))}
    </>
  );
};
