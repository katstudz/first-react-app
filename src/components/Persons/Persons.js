import Person from "./Person/Person";
import React ,{Component} from "react";
import Radium from "radium";

class Persons extends Component{
    render() {
        console.log('[persons.js] rendering')
        return this.props.persons.map((person, index) => {
                return <Person
                    click={() => this.props.click(index)}
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            }
        )
    }
}


export default Radium(Persons);