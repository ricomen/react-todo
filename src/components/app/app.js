import React, { Component } from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ToDoList from "../todo-list";
import ItemAddForm from "../item-add-form";

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createToDoItem('Drink Coffer'),
            this.createToDoItem('Make Awesome App'),
            this.createToDoItem('Купить плюшек'),
            this.createToDoItem('Заменить ступичный подшипник'),
            this.createToDoItem('Тросик ручного тормоза'),
        ],
        term: '',
    };

    createToDoItem(label) {
        return {
            label,
            omportant: false,
            done: false,
            id: this.maxId++
        };

    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

            return {
                todoData: newArray
            }
        });
    };

    addItem = (text) => {
        this.setState(({ todoData }) => {
            const newArray = [
                ...todoData,
                this.createToDoItem(text)];
            return {
                todoData: newArray
            }
        });
    };

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] }

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];

    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    search(items, term) {

        if (term.length === 0) {
            return items;
        };

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }

    onSearchChange = (term) => {
        this.setState({ term });
    }

    render() {
        const { todoData, term } = this.state;

        const visibleItems = this.search(todoData, term);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className='todo-app'>
                <AppHeader
                    toDo={todoCount}
                    done={doneCount} />

                <div className="search-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter />
                </div>

                <ToDoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

                <ItemAddForm
                    onItemAdded={this.addItem} />
            </div>
        )
    }
};