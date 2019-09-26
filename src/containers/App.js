import React, {Component} from 'react';
import './App.module.css';
import Radium, {StyleRoot} from 'radium'
import cssclasses from './App.module.css';
import ErrorBoundary from "../components/Error/ErrorBoundary";
import Person from "../components/Persons/Person/Person";
import "../components/Persons/Person/Person.css";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";

class App extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        persons: [
            {id: 1, name: 'Eva', age: 21},
            {id: 2, name: 'Adam', age: 22},
            {id: 3, name: 'Victor', age: 33}
        ],

        username: 'Adam 1',
        showPersons: true
    };

    static getDerivedStateFromProps(props, state) {
        console.log("props", props);
        return state;
    }

    inputChangeName = (emit, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = emit.target.value;
        const peopleCopy = [...this.state.persons];
        peopleCopy[personIndex] = person;
        this.setState({persons: peopleCopy});
    }

    toogle = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    deletePerson = (index) => {
        const peopleCopy = [...this.state.persons];
        peopleCopy.splice(index, 1);
        this.setState({persons: peopleCopy});
    }



    render() {
        let persons = null;
        console.log('App.js render')

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    click={this.deletePerson}
                    changed={this.inputChangeName}
                />
            );
        } else {
            persons = (
                <div>
                    No people
                </div>)
        }

        return (
            <div className={cssclasses.App}>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.toogle}
                />
                {persons}
            </div>
        );
    }
}

export default Radium(App);