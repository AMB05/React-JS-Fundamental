// File: App.js
import React, { useState } from 'react';
import NameList from './NameList';
import NameForm from './NameForm';

function App() {
    const [names, setNames] = useState(['Alice', 'Bob', 'Charlie']);

    const addName = (newName) => {
        setNames([...names, newName]);
    };

    return (
        <div>
            <h1>Name List</h1>
            <NameForm addName={addName} />
            <NameList names={names} />
        </div>
    );
}

export default App;
