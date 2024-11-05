import React from 'react';

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="item">
                    {item}
                </div>
            ))}
        </div>
    );
};

export default ItemList;
