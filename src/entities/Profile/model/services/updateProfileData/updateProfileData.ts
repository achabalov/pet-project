import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfileData, Profile } from 'entities/Profile'
import { ThunkConfig } from 'app/providers/StoreProvider'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi
        const formData = getProfileData(getState())
        console.log(formData)
        try {
            const response = await extra.api.put<Profile>('/profile', formData)

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
