import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage'

interface LoginByUserNameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUserNameProps,
    { rejectValue: string }
>('login/loginByUsername', async ({ username, password }, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:8000/login', {
            username,
            password,
        })
        if (!response.data) {
            throw new Error()
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
        thunkAPI.dispatch(userActions.setAuthData(response.data))
        return response.data
    } catch {
        return thunkAPI.rejectWithValue('error')
    }
})