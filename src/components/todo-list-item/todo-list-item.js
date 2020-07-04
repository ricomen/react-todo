import React, { Component } from "react";
import './todo-list-item.css';

export default class ToDoListItem extends Component {

    onLabelClick = () => {
        console.log(this.props.label);
    };

    render() {
        const { label, important = false } = this.props;
        return (
            <>
                <span className='todo-list-item'>
                    <span
                        className='todo-list-item-label'
                        onClick={this.onLabelClick}>
                        {label}
                    </span>
                </span>
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
};