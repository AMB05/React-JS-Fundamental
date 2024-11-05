// File: App.js
import React, { useState } from 'react';
import ItemList from './ItemList';

function App() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue(''); // Reset input setelah menambahkan item
        }
    };

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    return (
        <div>
            <h1>Item List with React Hooks</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add an item"
            />
            <button onClick={addItem}>Add Item</button>
            <ItemList items={items} removeItem={removeItem} />
            <p>Total items: {items.length}</p>
        </div>
    );
}

export default App;
