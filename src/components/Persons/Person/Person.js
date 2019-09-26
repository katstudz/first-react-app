import React from 'react';
import Radium from "radium";
const person = (props) => {

    if(props.age < 18){
        throw new Error('cant drink alcohol');
    }

    return (
        <div className="Person">
            <p onClick={props.click}> I'm a {props.name}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.names}/>
        </div>
    )
}

export default Radium(person);