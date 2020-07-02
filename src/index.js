import React from "react";
import ReactDOM from 'react-dom';

const ToDoList = () => {
    return (
        <ul>
            <li>Изучение React</li>
            <li>Создание приложения</li>
        </ul>
    )
};

const AppHeader = () => {
    return <h1>Список дел</h1>
};

const SearchPanel = () => {
  return <input type="text" placeholder='Поиск'/>
};

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