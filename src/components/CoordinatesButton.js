import React, { Component } from 'react'; 

export default class CoordinatesButton extends Component { 

    handleOnClick = chicken => { 
        let newArray = [chicken.clientX, chicken.clientY]
        this.props.onReceiveCoordinates(newArray)
    }

    render() { 
        return(
            <button onClick={this.handleOnClick}></button>
        )
    }
}