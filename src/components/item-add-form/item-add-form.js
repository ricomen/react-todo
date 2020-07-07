import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    render() {
        const { onItemAdded } = this.props;

        return (
            <div className='item-add-form'>
                <button
                    className='btn btn-outline-seconfary btn-sm'
                    onClick={() => onItemAdded('Hello World')}>Добавить задачу</button>
            </div>
        );
    };
}