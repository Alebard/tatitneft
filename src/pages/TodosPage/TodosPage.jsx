import React from 'react';
import {useSelector} from "react-redux";
import {Todo} from "../../components/Todo";
import {TodoForm} from "../../components/TodoForm";
import {Preloader} from "../../components/Preloader";


export const TodosPage = () => {
    const {todos, idTodosBasket, isLoading} = useSelector(state => state.todo)
    const todosList = todos.filter(i => !idTodosBasket.includes(i.id));
    const TodosList = todosList.map(todo => <Todo todo={todo} key={todo.id}/>)

    return (
        <div>
            <h1>Список Заметок</h1>
            <TodoForm/>
            { isLoading && <Preloader/> }
            {TodosList}
        </div>
    );
};


