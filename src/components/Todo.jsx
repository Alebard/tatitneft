import React from 'react';
import styled from "styled-components";
import deleteIcon from '../svg/close.svg'
import {Link} from "react-router-dom";
import {useDispatch, } from "react-redux";
import {deleteTodo, moveToBasket} from "../store/slices/todosSlice";


const TodoWrapper = styled.div`
  padding: 10px;
  border: 1px solid #9b9b9b;
  margin: 5px 0;
  display: flex;
  align-items: center;
  border-radius: 10px;
`

const TodoInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const TodoTitle = styled.div`
  font-size: 20px;
  text-decoration: underline;
`

const TodoSubtitle = styled.div`
  margin-top: 10px;
`

const Del = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: red;
  border-radius: 50%;
  margin-left: 20px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  flex-grow: 1;
`


export const Todo = ({todo, isBasketPage}) => {
    const todoShortSubtitle = todo.body.length > 50
        ? todo.body.substr(0, 50)+'...'
        :  todo.body
    const dispatch = useDispatch()

    return (
        <TodoWrapper>
            <LinkStyled to={`/todos/${todo.id}`}>
                <TodoInfo>
                    <TodoTitle>
                        {todo.title}
                    </TodoTitle>
                    <TodoSubtitle>
                        {todoShortSubtitle}
                    </TodoSubtitle>
                </TodoInfo>
            </LinkStyled>
            <Del onClick={() => dispatch(isBasketPage? deleteTodo(todo.id) : moveToBasket(todo.id))}>
                <Img src={deleteIcon} alt=""/>
            </Del>
        </TodoWrapper>
    );
};

