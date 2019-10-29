// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{


    createArray = (event) => { 
        // console.log(this.props.onReceiveCoordinates);
        let array = [];
        array.push(event.clientX);
        array.push(event.clientY);
        this.props.onReceiveCoordinates(array);
    }

    render(){
        return(
            <button onClick={this.createArray}>CoordinatesButton</button>
        )
    }
}