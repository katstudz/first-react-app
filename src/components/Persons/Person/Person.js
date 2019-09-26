import React, {Component} from 'react';
import Radium from "radium";

class Person extends Component{
    render() {
        if(this.props.age < 18){
            throw new Error('cant drink alcohol');
        }

        return (
            <div className="Person">
                <p onClick={this.props.click}> I'm a {this.props.name} and {this.props.age} </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.names}/>
            </div>
        )
    }
}
export default Radium(Person);