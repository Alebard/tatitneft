import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import '@csstools/normalize.css';
import styled from "styled-components";
import {Route, Routes, HashRouter} from "react-router-dom";
import {TodosPage} from "./pages/TodosPage/TodosPage";
import {TodoPage} from "./pages/TodoPage/TodoPage";
import {BasketPage} from "./pages/BasketPage/BasketPage";
import {Basket} from "./components/Basket";

const AppWrapper = styled.div`
  max-width: 800px;
  padding: 50px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  position: relative;
`
const Title = styled.div`
  font-size: 32px;
  text-align: center;
`




function App() {
    const dispatch = useDispatch()

    useEffect(() => {
    }, [])

    return (
        <AppWrapper>
            <Title>Todos app</Title>
            <HashRouter>
                <Basket/>
                <Routes>
                    <Route path="/" element={<TodosPage/>}/>
                    <Route path="/todos/:id" element={<TodoPage/>}/>
                    <Route path="/basket" element={<BasketPage/>}/>
                </Routes>
            </HashRouter>
        </AppWrapper>

    );
}

export default App;
