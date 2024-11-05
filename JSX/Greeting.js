import React from 'react';

function Greeting(props) {
    const greetingMessage = `Hello, ${props.name}!`;
    return <h1>{greetingMessage}</h1>;
}

export default Greeting;
