// File: ItemList.js
import React from 'react';

function ItemList({ items, removeItem }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                {item}
                    <button onClick={() => removeItem(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
}

export default ItemList;
