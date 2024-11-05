// File: NameForm.js
import React, { useState } from 'react';

function NameForm(props) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            props.addName(inputValue);
            setInputValue(''); // Reset input setelah menambahkan nama
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new name"
            />
            <button type="submit">Add Name</button>
        </form>
    );
}

export default NameForm;
