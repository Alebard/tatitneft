import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../store/slices/todosSlice";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > * {
    margin: 5px;
  }
`

export const TodoForm = () => {
    const [title,setTitle] = useState('')
    const [subTitle,setSubTitle] = useState('')
    const dispatch = useDispatch()

    function submitHandler(e) {
        e.preventDefault()
        if(!title.trim() || !subTitle.trim()){
            alert('Заполните все поля')
            return
        }
        const id = Math.random()
        const todo = {
            id,
            title,
            body: subTitle,
        }
        dispatch(addTodo(todo))
        setTitle('')
        setSubTitle('')
    }

    return (
        <Form onSubmit={(e) => submitHandler(e)}>
            <label>
                Название заметки
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <label>
                Описание заметки
                <input type="text" value={subTitle} onChange={(e) => setSubTitle(e.target.value)}/>
            </label>
            <button>Добавить заметку</button>
        </Form>
    );
};

