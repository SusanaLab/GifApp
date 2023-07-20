import React, { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
  // Estado local para manejar el valor del input
  const [input, setInput] = useState('Gif');

  // Función para actualizar el estado 'input' cuando el valor del input cambia
  const onInputChange = ({ target }) => {
    setInput(target.value);
  };

  // Función para manejar el evento de envío del formulario
  const onSubmit = (event) => {
    // Prevenir el comportamiento predeterminado del formulario (evitar recarga de la página)
    event.preventDefault();
    //trim elimina los espacios al inicio y al final y revisa si la longitud es menor o igual a 1 no ejecuta la funcions
    if (input.trim().length <= 1) return 
    setInput('')
    onNewCategory(input.trim());

  };

  return (
    // Formulario que llama a la función 'onSubmit' cuando se envía
    <form onSubmit={onSubmit}>
      {/* Input controlado que refleja el valor de 'input' y llama a 'onInputChange' cuando cambia */}
      <input
        type="text"
        placeholder='Buscar gifs'
        value={input}
        onChange={onInputChange}
      />
    </form>
  );
};

