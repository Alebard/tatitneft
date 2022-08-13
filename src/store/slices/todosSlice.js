import {createSlice} from '@reduxjs/toolkit';
import {fetchTodos} from "../actioncreators/fetchTodos";
import {getStorage, TODOS_BASKET, TODOS_LIST} from "../../storage/storage";


const initialState = {
    todos: getStorage(TODOS_LIST),
    isLoading: false,
    error: '',
    idTodosBasket: getStorage(TODOS_BASKET),
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        updateTodosList:(state, action) => {
            state.todos = action.payload
        },
        updateTodosBasket:(state, action) => {
            state.idTodosBasket = action.payload
        },

    },
    extraReducers: {
        [fetchTodos.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.todos =  [...action.payload,...state.todos];
        },
        [fetchTodos.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [fetchTodos.pending.type]: (state) => {
            state.isLoading = true;
        }
    }
})


export const { updateTodosList, updateTodosBasket} = todosSlice.actions;
