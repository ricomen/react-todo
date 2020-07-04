import React from "react";
import './todo-list-item.css';

const ToDoListItem = ({ label, important = false }) => {

    return (
        <>
            { important && (<b>{label}</b>) }

            { !important && (<span>{label}</span>) }
            <button 
                type='button'
                className='btn btn-outline-success btn-sm float-right'>
                    <i className='fa fa-exclamation'></i>
            </button>
            <button 
                type='button'
                className='btn btn-outline-danger btn-sm float-right'>
                    <i className='fa fa-trash-o'></i>
            </button>
        </>
    )
}
export default ToDoListItem;