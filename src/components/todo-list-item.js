import React from "react";
import './todo-list-item.css';

const ToDoListItem = ({ label, important = false }) => {

    return (
        <>
            { important && (<b>{label}</b>) }

            { !important && (<span>{label}</span>) }
            <button 
                type='button'
                className='btn btn-outline-success'>
                    <i className='fa fa-exclamation btn-sm'></i>
            </button>
            <button 
                type='button'
                className='btn btn-outline-danger'>
                    <i className='fa fa-trash-o btn-sm'></i>
            </button>
        </>
    )
}
export default ToDoListItem;