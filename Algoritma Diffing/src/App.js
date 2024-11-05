import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ItemList from './ItemList';
import AddItem from './AddItem';

const App = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <div className="container">
            <h1>Item List</h1>
            <AddItem onAddItem={addItem} />
            <ItemList items={items} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
