import React from 'react';

function StyledComponent() {
    const style = {
        color: 'blue',
        fontSize: '20px',
        margin: '20px'
    };

    return <h1 style={style}>This is a styled component</h1>;
}

export default StyledComponent;
