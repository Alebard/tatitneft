import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Todo} from "../../components/Todo";

export const BasketPage = () => {
    const navigate = useNavigate();
    const {idTodosBasket, todos} = useSelector(state => state.todo)
    const todosList = todos.filter(i => idTodosBasket.includes(i.id));
    const TodosList = todosList.map(todo => <Todo todo={todo} key={todo.id} isBasketPage={true}/>)

    return (
        <div>
            <h1>Корзина</h1>
            <button onClick={() => navigate(-1)}>Назад</button>
            {TodosList}
        </div>
    );
};

