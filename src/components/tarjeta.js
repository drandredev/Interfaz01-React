import React from 'react'
import './tarjetas.css'
import logo from '../assets/2.png'


function tarjeta(props) {
    console.log(props)
    return (
        <center>
            <div className="card text-center animate__animated animate__flipInY">
            <img src={props.imagen} alt=""></img>
            <div className="card-body animate__animated animate__jackInTheBox">
                 <img src={logo} alt="" height="60px"></img>
                <p className="card-text text-secondary">Descubre los almuerzos diarios de restaurantes Arequipeños a tu alrededor.</p>
                <a href={props.url} className="btn btn-outline-secondary" target="_blank">
                    Me interesa
                </a>
                
                <p className="card-text text-secondary">Animated by <a href="https://animate.style/">Animate.css</a></p>

            </div>
            
        </div>
        </center>
    )
}

export default tarjeta
