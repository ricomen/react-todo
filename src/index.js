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
        },
        {
            label: 'Make Awesome App',
            important: true,
        },
        {
            label: 'Drink Teal',
            impotant: false
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