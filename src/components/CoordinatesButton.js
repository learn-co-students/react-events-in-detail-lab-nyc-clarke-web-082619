// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {
    
    getCoordinates = event => {
        const coordinates = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(coordinates);
    }

    render() {
        return (
            <button onClick={this.getCoordinates}></button>
        );
    }
}   

export default CoordinatesButton;