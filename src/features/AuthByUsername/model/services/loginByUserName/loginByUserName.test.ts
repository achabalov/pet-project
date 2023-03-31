import axios from 'axios'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName'
import { Dispatch } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncFunc/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('getLoginPassword.test', () => {
    let dispatch: Dispatch
    let getState: () => StateSchema

    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn()
    })
    // test('should return user', async () => {
    //     const userValue = { username: '123', id: 1 }
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
    //     const action = loginByUsername({ username: '123', password: '123' })
    //     const result = await action(dispatch, getState, undefined)
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(dispatch).toHaveBeenCalledTimes(3)
    //     expect(result.meta.requestStatus).toBe('fulfilled')
    //     expect(result.payload).toEqual(userValue)
    // })
    //
    // test('should return error code 403', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    //     const action = loginByUsername({ username: '123', password: '123' })
    //     const result = await action(dispatch, getState, undefined)
    //
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(dispatch).toHaveBeenCalledTimes(2)
    //     expect(result.meta.requestStatus).toBe('rejected')
    //     expect(result.payload).toBe('error')
    // })

    test('should return user', async () => {
        const userValue = { username: '123', id: 1 }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: '123', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('should return error code 403', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: '123', password: '123' })

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
