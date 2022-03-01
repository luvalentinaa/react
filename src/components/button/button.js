import React from 'react'
import './button.css'

const nameLabel = (label) => {
  alert('A label desse botão é ' + label)
}

const Button = (props) =>{
  return (
    <div className="box-btn">
    <button className='btn' onClick={ () => nameLabel(props.label)}>{props.label}</button>
    </div>
  )
}
 export default Button