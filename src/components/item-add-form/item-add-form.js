import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (evt) => {
        this.setState({
            label: evt.target.value
        });
    };

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState(() => {
            return {
                label: ''
            };
        });
    };

    render() {
        return (
            <form
                className='item-add-form d-flex'
                onSubmit={this.onSubmit}>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Что нужно сделать?'
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button
                    className='btn btn-outline-secondary btn-sm'
                >Добавить задачу</button>
            </form>
        );
    };
}