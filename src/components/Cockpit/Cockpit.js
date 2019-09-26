import React from 'react'
import cssclasses from "../../containers/App.module.css";
import ErrorBoundary from "../Error/ErrorBoundary";
import classes from './Cockpit.css'
import Radium from "radium";


const cockpit = (props) =>{

    console.log(props);

    let buttonClass = ' ';


    if(props.showPersons)
        buttonClass = classes.RedButton;

    const assignedClasses = [];
            if(props.persons.length <= 2)
                assignedClasses.push(classes.red);
            if(props.persons.length <= 1)
                assignedClasses.push(classes.bold);
    return (
            <div >
                 <p >One two</p>
                    <button
                        className={buttonClass}
                        onClick={props.clicked}
                    >People
                    </button>


            </div>
         );

};

export default Radium(cockpit);
