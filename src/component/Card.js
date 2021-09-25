/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../css/Card.css"

const Card = (props) => {

    return (
        <a href="#" className="container">
            <h1>{props.head}</h1>
            <div className="image-container">
                <img src={props.img} alt={props.alt} />
            </div>
            <p>{props.text}</p>
            <div className="shadow-prop"></div>
        </a>
    )
}

export default Card