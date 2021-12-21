import React from "react";
import './list.css';
import ListItem from "./ListItem";

function List(props) {
    const { lists } = props;
    const listMap = lists.map( (list) =>
    <ListItem 
        text={list.text} 
        id={list.id} 
        key={list.id} 
        deleteItem={props.deleteItem}
    />).sort((a, b) => a > b ? 1 : -1);

    return(
        <ul>
            {listMap}
        </ul>
    );
}

export default List;
