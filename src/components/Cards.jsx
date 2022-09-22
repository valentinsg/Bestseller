import React from 'react';
import Card from './Card';
import '../estilos-componentes/cards.css';
import coin from "../imagenes/bestsellercoin.png";
import fondotarjeta from "../imagenes/fondo-tarjetas.png"
import monedastarjeta from "../imagenes/contenido-tarjeta-nuevo-pedido.png";

const cards =[
  {
    id: 1,
    title:"Nuevo pedido",
    image: fondotarjeta,
  },
  {
    id: 2,
    title:"Mis pedidos",
    image: fondotarjeta,
  },
  {
    id: 3,
    title: "Pérfil",
    image: fondotarjeta,
  }
]

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {
            cards.map(( card => (
                <div className="col-5" key={card.id}>
                  <Card title={card.title} imageSource={card.image} url={card.url}/>
                </div>

            )))
          }
        </div>
    </div>
    
  )
}

export default Cards;
