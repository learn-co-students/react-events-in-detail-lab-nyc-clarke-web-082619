import React, { Component } from 'react';

class DelayedButton extends Component {
    
    onDelayedClick = (event) => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay)
    }

    render() {
       return <button onClick={this.onDelayedClick} ></button>
    }
    
}

export default DelayedButton;
