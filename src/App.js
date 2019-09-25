import React, {Component} from 'react';
import './App.module.css';
import './Person/Person.css';
import Person from './Person/Person'
import Radium, {StyleRoot} from 'radium'
import cssclasses from './App.module.css';

class App extends Component {

    state = {
        persons: [
            {id: 1, name: 'Eva', age: 21},
            {id: 2, name: 'Adam', age: 22},
            {id: 3, name: 'wiktor', age: 3}
        ],

        username: 'Adam 1',
        showPersons: true
    }

    inputChangeName = (emit, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = emit.target.value;
        const peopleCopy = [... this.state.persons];
        peopleCopy[personIndex] = person;
        this.setState({persons: peopleCopy});
    }

    toogle = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    deletePerson = (index)=> {
        const peopleCopy = [... this.state.persons];
        peopleCopy.splice(index, 1);
        this.setState({persons: peopleCopy});
    }

    render() {
        let persons = null;
        let buttonClass = ' ';

        if (this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                            return <Person
                                click ={() => this.deletePerson(index)}
                                key={person.id}
                                name={person.name}
                                changed={(event) => this.inputChangeName(event, person.id)}
                            />
                        }
                    )}
                </div>
            )
        }

        else {
            persons = (
                <div>
                    No people
                </div>
            )
            buttonClass = cssclasses.RedButton;
        }


        return (
            <StyleRoot>
            <div className={cssclasses.App}>
                <p >One two</p>

                <div>
                    <button
                        className={buttonClass}
                        onClick={this.toogle}>People
                    </button>
                    {persons}
                </div>

            </div>
            </StyleRoot>
                );
    }
}

export default Radium( App);