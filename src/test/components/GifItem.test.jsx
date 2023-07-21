import { getByRole, render } from '@testing-library/react';
import React from 'react';
import { GifItem } from '../../components';


describe('Pruebas en gifitem', () => {
    const title ='Saitama';
    const url = 'https://one-punch.com/saitama.jpg'
  test('debe hacer match con el snapshot ', () => {
        const {container} = render(<GifItem title={title} url{url}/>);
        expect (container ).toMatchSnapshot
        //captura de pantalla" del resultado de una renderización de un componente o estructura de datos específica y la comparas con una versión previamente guardada, que es conocida como "snapshot
    });
    

    test('debe mostrar el url y el alt indicado', () => {
       
        render(<GifItem title={title} url{url}/>);

   const {src, alt} = screen.getByRole('img');
   expect(src).toBe(url);
   expect(alt).toBe(alt);
        
    })
    
})
