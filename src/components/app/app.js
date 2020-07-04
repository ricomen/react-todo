import React from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ToDoList from "../todo-list";

const App = () => {
    const todoData = [
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
    ];
    return (
        <div className='todo-app'>
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <ToDoList todos={todoData} />
        </div>
    )
};

export default App;