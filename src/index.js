import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ToDoList from "./components/todo-list";

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
            <ToDoList todos={todoData} />
        </>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));