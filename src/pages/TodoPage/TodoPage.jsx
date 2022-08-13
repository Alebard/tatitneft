import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import styled from "styled-components";



const TodoTitle = styled.div`
  margin-top: 50px;
  font-size: 20px;
  text-decoration: underline;
`

const TodoSubtitle = styled.div`
  margin-top: 10px;
`


export const TodoPage = () => {
    const params = useParams()
    const {todos} = useSelector(state => state.todo)
    const id = params.id
    const todo = todos.find(t => t.id == id)
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)}>Назад</button>
            <h1>Заметка</h1>
            <TodoTitle>
                {todo.title}
            </TodoTitle>
            <TodoSubtitle>
                {todo.body}
            </TodoSubtitle>
        </div>
    );
};

