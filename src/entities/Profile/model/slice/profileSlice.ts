import { createSlice } from '@reduxjs/toolkit'
import { fetchProfileData } from 'entities/Profile'
import { ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: false,
    error: '',
    data: undefined,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
                state.error = undefined
                state.isLoading = false
                state.data = payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            }),
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
