import React from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
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
        <>
            <AppHeader />
            <SearchPanel />
            <ToDoList todos={todoData} />s
        </>
    )
};

export default App;