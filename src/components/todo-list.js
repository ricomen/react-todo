import React from 'react';
import ToDoListItem from './todo-list-item'

const ToDoList = () => {
    return (
        <ul>
            <li><ToDoListItem label='Coffee'/></li>
            <li><ToDoListItem
                label='Tea'
                important /></li>
        </ul>
    )
};

export default ToDoList;