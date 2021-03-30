import React from 'react'
import Tarjeta from './tarjeta'

import foto1 from '../assets/1.jpg'
import foto2 from '../assets/2.jpg'
import foto3 from '../assets/3.jpg'
import foto4 from '../assets/4.jpg'
import aqp from '../assets/peru-arequipa-2.jpg'

const tarjs = [
    {
        id: 1,
        titulo: 'TECFOOD',
        imagen: foto3,
        url: 'https://www.tecfood.xyz/restaurantes/'
    },
    /*
    {
        id: 2,
        titulo: 'Afiliarse',
        imagen: foto2,
        url: 'https://www.tecfood.xyz/restaurantes/detalle'
    },
    {
        id: 3,
        titulo: 'Registrarse',
        imagen: foto3,
        url: 'https://www.tecfood.xyz/users/login/'
    },
    */
    
]

function tarjetas() {
    console.log(tarjs)
    return (
        <div className="container d-flex justify-content-center align-items-center h-100" >
            <div className="row d-flex justify-content-center align-items-center" >
                {
                    tarjs.map(tarjeta => (
                        <div className="col-md-8 " key={tarjeta.id}>
                        <Tarjeta titulo={tarjeta.titulo} imagen={tarjeta.imagen} url={tarjeta.url}/>
                </div>
                    ))
                }   
            </div>
                
        </div>
    )
}

export default tarjetas
