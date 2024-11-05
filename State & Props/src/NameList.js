// File: NameList.js
import React from 'react';

function NameList(props) {
    return (
        <ul>
        {props.names.map((name, index) => (
            <li key={index}>{name}</li>
        ))}
        </ul>
    );
}

export default NameList;
