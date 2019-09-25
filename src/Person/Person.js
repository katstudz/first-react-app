import React from 'react';
import Radium from "radium";
const person = (props) => {
    const style = {
      '@media (min-width: 500px)':{
          width: '450px'
      }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}> I'm a {props.name}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.names}/>
        </div>
    )
}

export default Radium(person);