import React from 'react'
import "./Person.css"
// import PropTypes from 'prop-types'

function Person(props) {
  return (
    <div className='Person'>
      {/* Passing the method(function) from "App.jsx" as reference by calling the props "click"   */}
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.!</p>
      <p>{props.children}</p>
      {/* onChange is fired every time the value of the input changes */}
      {/* We created a two way binding by adding the value attribute and equal it to the props name  */}
      <input type="text" name="name" id="name" onChange={props.changed} value={props.name} />
    </div>
  )
}

Person.propTypes = { }

export default Person
