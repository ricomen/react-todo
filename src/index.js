import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ToDoList from "./components/todo-list";

const App = () => {
    return (
        <>
            <AppHeader />
            <SearchPanel />
            <ToDoList />
        </>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));