import { DeepPartial } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('test LoginSlice', () => {
    test('should changed username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' }
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('admin'))).toEqual({
            username: 'admin',
        })
    })

    test('should changed password', () => {
        const state: DeepPartial<LoginSchema> = { password: '213' }
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345'))).toEqual({
            password: '12345',
        })
    })
})
