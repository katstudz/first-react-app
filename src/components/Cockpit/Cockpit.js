import React, {useEffect} from 'react'
import classes from './Cockpit.css'
import Radium from "radium";


const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        setTimeout(()=>{
            console.log('saved data')
        }, 1000)
    });
    console.log(props);

    let buttonClass = ' ';


    if (props.showPersons)
        buttonClass = classes.RedButton;

    const assignedClasses = [];
    if (props.persons.length <= 2)
        assignedClasses.push(classes.red);
    if (props.persons.length <= 1)
        assignedClasses.push(classes.bold);
    return (
        <div>
            <h1>{props.title}</h1>
            <button
                className={buttonClass}
                onClick={props.clicked}
            >
                People
            </button>


        </div>
    );

};

export default Cockpit;
