import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
        console.log(`Component updated: ${this.state.count}`);
        }
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
        <div>
            <p>You clicked {this.state.count} times</p>
            <button onClick={this.incrementCount}>Click me</button>
        </div>
        );
    }
}

export default Counter;
