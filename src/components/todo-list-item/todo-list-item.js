import React, { Component } from "react";
import './todo-list-item.css';

export default class ToDoListItem extends Component {
    render() {
        const { label, important = false } = this.props;
        return (
            <div>
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
            </div>
        )
    }
};