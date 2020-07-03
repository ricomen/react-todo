import React from 'react';
import ToDoListItem from './todo-list-item'

const ToDoList = ({ todos }) => {

    return (
        <ul>
            { todos.map((item) => {
                return (
                    <li><ToDoListItem {...item} /></li>
                );
            }) }
        </ul>
    )
};

export default ToDoList;