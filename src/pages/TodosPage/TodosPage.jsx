import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Todo} from "../../components/Todo";
import {TodoForm} from "../../components/TodoForm";
import {Preloader} from "../../components/Preloader";
import {fetchTodos} from "../../store/actioncreators/fetchTodos";


export const TodosPage = () => {
    const {todos, idTodosBasket, isLoading} = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const todosList = todos.filter(i => !idTodosBasket.includes(i.id));
    const TodosList = todosList.map(todo => <Todo todo={todo} key={todo.id}/>)


    return (
        <div>
            <h1>Список Заметок</h1>
            <TodoForm/>
            {!todosList.length && <h2>У вас нет заметок</h2>}
            {TodosList}
            { isLoading
                ?
                <Preloader/>
                :
                <button onClick={() => dispatch(fetchTodos())}>Загрузить заметки</button>}
        </div>
    );
};


