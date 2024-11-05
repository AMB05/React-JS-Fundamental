import React from 'react';

function ItemList(props) {
    const items = props.items.map((item, index) => <li key={index}>{item}</li>);
    return <ul>{items}</ul>;
}

export default ItemList;
