import React from "react";
import './list.css';
import ListItem from "./ListItem";

function List(props) {
    const { list } = props;
    const listMap = list.map( (text, index) => <ListItem item={text} key={index} />);

    return(
        <ul>
            {listMap}
        </ul>
    );
}

export default List;
