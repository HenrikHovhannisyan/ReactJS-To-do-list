import React from "react";
import './list.css';

function List(props) {
    const { list } = props;
    const listMap = list.map( (text, index) =>
        <li key={`${text}_${index}`}>
            {text}
        </li>
    );

    return(
        <ul>
            {listMap}
        </ul>
    );
}

export default List;
