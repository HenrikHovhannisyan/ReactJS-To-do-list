import React from "react";
import './list.css';

function ListItem(props) {
    return (
        <li>
            {props.item}
        </li>
    );
}

export default ListItem;
