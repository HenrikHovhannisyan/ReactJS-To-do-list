import React from "react";
import './list.css';

function ListItem(props) {

    return (
        <li className='listItem'>
            {props.text}
            <button onClick={() => props.deleteItem(props.id)} className='btn_delete'>Delete</button>
        </li>
    );
}

export default ListItem;
