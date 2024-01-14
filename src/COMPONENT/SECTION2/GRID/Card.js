import React from 'react'
import './card.css'
const Card = (props) => {
  return (
    <div className="card" >
    <img src={props.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.p}.</p>
      
    </div>
  </div>
  )
}

export default Card
