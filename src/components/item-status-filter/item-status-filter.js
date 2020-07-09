import React, { Component } from 'react';
import classNames from 'classnames';

import './item-status-filter.css'

export default class ItemStatusFilter extends Component {
    state = {

    };

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]

    render() {

        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            return (
                <button type="button"
                    key={name}
                    className={ classNames('btn', { 'btn-info': isActive, 'btn-outline-secondary': !isActive}) }
                    onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            )
        });
        return (
            <div className="btn-group">
                { buttons }
            </div>
        );
    }
};