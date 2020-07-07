import React from 'react';

import ToDoListItem from '../todo-list-item'
import './todo-list.css'

const ToDoList = ({ todos, onDeleted }) => {

    return (
        <ul className='list-group todo-list'>
            { todos.map((item) => {
                const { id, ...itemProps } = item
                return (
                    <li key={id}
                        className='list-group-item todo-list-item'
                    >
                        <ToDoListItem
                        {...itemProps}
                        onDeleted={() => onDeleted(id)} />
                    </li>
                );
            }) }
        </ul>
    )
};

export default ToDoList;