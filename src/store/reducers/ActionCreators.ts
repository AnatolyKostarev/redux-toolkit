import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";
// import {usersFetching, usersFetchingError, usersFetchingSuccess} from "./UserSlice";


// export const fetchUsers = async (dispatch: AppDispatch) => {
//     try {
//         dispatch(usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(usersFetchingSuccess(response.data))
//     } catch(e) {
//         dispatch(usersFetchingError(`${e}`))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return  response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Ошибка загрузки пользователей")
        }
    }
)
