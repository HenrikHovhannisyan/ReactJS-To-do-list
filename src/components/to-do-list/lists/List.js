import React from "react";
import './list.css';

function List(props) {
    const list = props.list;
    const listMap = list.map( (e) =>
        <li key={e.toString()}>{e}</li>
    )

    return(
        <ul>
            {listMap}
        </ul>
    )
}

export default List;
