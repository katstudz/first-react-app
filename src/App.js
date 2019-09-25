import React, {Component} from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person'
import Radium, {StyleRoot} from 'radium'


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

        const style = {
            backgroundColor: '#bafff7',
            color: 'black',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            ':hover': {
                backgroundColor: 'green',
                color: 'black'
            }
        };

        let persons = null;
        if (this.state.showPersons)
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                      return <Person
                            click ={() => this.deletePerson(index)}
                            key={person.id}
                            name={person.name}
                            changed={(event) => this.inputChangeName(event, person.id)}
                        />
                    })}
                </div>

            )
        else {
            persons = (
                <div>
                    No people
                </div>
        )
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor : 'lightgreen'
            }
        }

        let classes = [];
        if(this.state.persons.length <= 2){
            classes.push('red');
        }
        else
            classes.push('bold');

        return (
            <StyleRoot>
                <p className={classes}>One two</p>

                <div>
                    <button
                        style={style}
                        onClick={this.toogle}>People
                    </button>
                    {persons}
                </div>

            </StyleRoot>);
    }
}

export default Radium( App);