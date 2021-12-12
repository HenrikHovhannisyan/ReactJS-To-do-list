import React from "react";
import './list.css';

function ListItem(props) {
    return (
        <div>
            <li>
                {props.item}
            </li>
        </div>
    );
}

export default ListItem;