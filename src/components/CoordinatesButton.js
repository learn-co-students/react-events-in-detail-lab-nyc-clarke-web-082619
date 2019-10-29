// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    getCoordinates = event => {
        const co = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(co);
    }

    render(){

        return(
            <button onClick={this.getCoordinates}></button>
        );
    }
}