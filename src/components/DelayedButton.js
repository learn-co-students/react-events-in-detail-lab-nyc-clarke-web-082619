// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {
    constructor(){
        super()
        this.state = {}
    }

    delayBtn = (event) => {
        event.persist()
        // console.log(event)
        setTimeout(()=>{
            this.props.onDelayedClick(event)
        }, this.props.delay)
        
    }
    render(){
        return <button onClick={this.delayBtn}>Delayed</button>
    }
}
