import React from "react";
import Delete from "../delete/Delete";
import './list.css';

function List(props) {
    const { list } = props;
    const listMap = list.map( (text, index) =>
        <li key={`${text.toString()}_${index}`}>
            {text}
            <Delete delID={index} list={list}/>
        </li>
    );

    return(
        <ul>
            {listMap}
        </ul>
    );
}

export default List;
