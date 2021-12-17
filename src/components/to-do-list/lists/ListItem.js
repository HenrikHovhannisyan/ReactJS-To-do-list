import React from "react";
import './list.css';

function ListItem(props) {

    function onDeleteItem() {
        props.deleteItem(props.id);
    }

    return (
        <li className={'listItem'}>
            {props.text}
            <button onClick={onDeleteItem} className='btn_delete'>Delete</button>
        </li>
    );
}

export default ListItem;
