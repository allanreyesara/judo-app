import React, { useState, useEffect } from 'react';
import '../App.css';

export function LosLecheros(){
    return(
        <div className='lecherosItem'>
        <img src='https://raw.githubusercontent.com/allanreyesara/judo-app/main/media/LosLecheros.jpg' alt='Los Lecheros equipo' className='lecherosImagen'/>
        <div className='lecherosContainer'>
            <p>Ultima Edicion: 17 de Septiembre 2022</p>
            <a href='https://www.facebook.com/judocoronado/photos' target={'_blank'}>Imagenes de la edicion anterior</a>
        </div>
    </div>
    );
    
}

export default LosLecheros;