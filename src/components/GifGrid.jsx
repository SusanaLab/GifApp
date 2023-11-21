// GifGrid.js
import deleteIcon from '../Assets/delete.png'; 
import React from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category, onDeleteCategory }) => {
  const { images, isLoading } = useFetchGifs(category);

  const handleDeleteClick = () => {
    onDeleteCategory(category);
  };

  return (
    <>
      <div className="category-header">
        <h3>{category}</h3>
        <img src={deleteIcon} onClick={handleDeleteClick} alt="Delete" />
      </div>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
