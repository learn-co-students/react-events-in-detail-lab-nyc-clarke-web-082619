// Code DelayedButton Component Here
import React, {Component} from 'react';
import { EventEmitter } from 'events';

export default class DelayedButton extends Component{

    click = (event) => { 
        console.log(this.props.onDelayedClick);
        // console.log(this.props.delay);
        event.persist();
        setTimeout(()=>{this.props.onDelayedClick(event)}, this.props.delay);
    }

    render(){
        return(
            <button onClick={this.click}>DelayedButton</button>
        )
    }
}