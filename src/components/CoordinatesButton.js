// Code CoordinatesButton Component Here

import React from 'react';

export default class CoordinatesButton extends React.Component {

    constructor(props){
        super(props)
    }

    createCoordinateArray = (event) => {
        let coords = [ event.clientX, event.clientY];
        this.props.onReceiveCoordinates(coords)
    }

    render(){
        return (
            <button onClick={this.createCoordinateArray}></button>
        )
    }
}