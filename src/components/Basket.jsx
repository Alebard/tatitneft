import React from 'react';
import styled from "styled-components";
import cart from '../svg/basket.svg'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const Cart = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 25px;
  height: 25px;
  &:before {
    content: '${props => props.count}';
    height: 20px;
    min-width: 20px;
    position: absolute;
    top: -10px;
    left: 15px;
    padding: 2px;
    border-radius: 20px;
    background: red;
    text-align: center;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
`


export const Basket = () => {
    const {idTodosBasket} = useSelector(state => state.todo)
    const count = idTodosBasket.length

    return (
        <div>
            <LinkStyled to={`/basket`}>
                <Cart count={count}>
                    <Img src={cart} alt=""/>
                </Cart>
            </LinkStyled>
        </div>

    );
};

