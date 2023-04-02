import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'

describe('getLoginState.test', () => {
    test('should return all state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '123',
                isLoading: false,
                error: 'error',
            },
        }

        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'admin',
            password: '123',
            isLoading: false,
            error: 'error',
        })
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getLoginState(state as StateSchema)).toEqual(undefined)
    })
})
