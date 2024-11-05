// File: ColorChanger.js
import React, { useState } from 'react';

function ColorChanger() {
    const [color, setColor] = useState('black');

    const changeColor = () => {
        const newColor = color === 'black' ? 'blue' : 'black';
        setColor(newColor);
    };

    return (
        <div>
            <p style={{ color: color }}>This text changes color!</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default ColorChanger;
