import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'todos/fetch',
    async(_,  thunkApi) => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            return response.data
        }catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)