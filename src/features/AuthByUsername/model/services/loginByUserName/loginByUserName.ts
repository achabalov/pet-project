import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage'
import { ThunkConfig } from 'app/providers/StoreProvider'

interface LoginByUserNameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async ({ username, password }, { rejectWithValue, dispatch, extra }) => {
        try {
            const response = await extra.api.post('/login', {
                username,
                password,
            })

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            extra.navigate?.('/about')
            return response.data
        } catch {
            return rejectWithValue('error')
        }
    }
)
