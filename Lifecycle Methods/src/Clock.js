// File: Clock.js
import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
            super(props);
            this.state = {
                date: new Date(),
        };
    }

    // Lifecycle method: componentDidMount
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    // Lifecycle method: componentWillUnmount
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
        <div>
            <h2>Current Time: {this.state.date.toLocaleTimeString()}</h2>
        </div>
        );
    }
}

export default Clock;
