import React, { Component } from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ToDoList from "../todo-list";

export default class App extends Component {

    state = {
        todoData: [
            {
                label: 'DrinkCofeee',
                important: false,
                id: 1
            },
            {
                label: 'Make Awesome App',
                important: true,
                id: 2
            },
            {
                label: 'Drink Teal',
                impotant: false,
                id: 3
            },
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id ===id);
            const newArray = [ ...todoData.slice(0, idx), ...todoData.slice(idx+1)]

            return {
                todoData: newArray
            }
        });
    };

    render() {
        return (
            <div className='todo-app'>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <ToDoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}/>
            </div>
        )
    }
};