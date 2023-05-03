import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfileData, Profile } from 'entities/Profile'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const formData = getProfileData(getState())

    const errors = validateProfileData(formData)
    if ((errors as ValidateProfileError[])?.length) {
        return rejectWithValue(errors as ValidateProfileError[])
    }

    try {
        const response = await extra.api.put<Profile>('/profile', formData)

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (e) {
        console.log(e)
        return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
})
