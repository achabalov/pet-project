import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { ProfileSchema, Profile, ValidateProfileError } from '../types/profile'

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: false,
    error: '',
    data: undefined,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            }
        },
        cancelEdit: (state) => {
            state.form = state.data
            state.readonly = true
            state.validateErrors = undefined
        },
        saveEdit: (state) => {
            state.data = state.form
            state.readonly = true
        },
    },
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
                state.form = payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateErrors = undefined
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled, (state, { payload }) => {
                state.data = payload
                state.form = payload
                state.error = undefined
                state.isLoading = false
                state.readonly = true
            })
            .addCase(updateProfileData.rejected, (state, { payload }) => {
                state.validateErrors = payload
                state.isLoading = false
            }),
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
