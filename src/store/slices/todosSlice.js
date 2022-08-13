import {createSlice} from '@reduxjs/toolkit';
import {fetchTodos} from "../actioncreators/fetchTodos";

const initialState = {
    todos: [],
    isLoading: false,
    error: '',
    idTodosBasket: [],
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        moveToBasket: (state, action) => {
            state.idTodosBasket.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(t => t.id !== action.payload)
            state.idTodosBasket = state.idTodosBasket.filter(t => t !== action.payload)
        },

        addTodo: (state, action) => {
            state.todos.unshift(action.payload)
        },

    },
    extraReducers: {
        [fetchTodos.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.todos = action.payload;
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


export const {moveToBasket, deleteTodo, addTodo} = todosSlice.actions;
