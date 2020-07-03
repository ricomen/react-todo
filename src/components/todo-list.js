import React from 'react';
import ToDoListItem from './todo-list-item'

const ToDoList = ({ todos }) => {

    return (
        <ul>
            { todos.map((item) => {
                const { id, ...itemProps } = item
                return (
                    <li key={id}><ToDoListItem {...itemProps} /></li>
                );
            }) }
        </ul>
    )
};

export default ToDoList;