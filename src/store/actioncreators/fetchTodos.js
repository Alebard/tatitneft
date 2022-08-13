import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {getLastLoadPage, getStorage, setLastLoadPage, setStorage, TODOS_LIST} from "../../storage/storage";

export const fetchTodos = createAsyncThunk(
    'todos/fetch',
    async(_,  thunkApi) => {
        let page = generator.next().value
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3&_page=' + page)
            setLastLoadPage(page)
            const newTodosList = [...response.data, ...getStorage(TODOS_LIST)]
            setStorage(newTodosList, TODOS_LIST)
            return response.data
        }catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

function* generateSequence(start, end) {
    for (let i = start +1 ; i <= end; i++) yield i;
}

let generator = generateSequence(getLastLoadPage(),33);
