import React from "react";
import ReactDOM from 'react-dom';

const el = (
    <>
        <h1>Список дел</h1>
        <input type="text" placeholder='Поиск'/>
        <ul>
            <li>Изучение React</li>
            <li>Создание приложения</li>
        </ul>
    </>
);
ReactDOM.render(el, document.getElementById('root'));