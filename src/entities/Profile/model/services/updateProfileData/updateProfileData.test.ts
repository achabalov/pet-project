import { ValidateProfileError } from 'entities/Profile'
import { updateProfileData } from './updateProfileData'
import { Country } from '../../../../Country/model/types/country'
import { Currency } from '../../../../Currency/model/types/types'
import { TestAsyncThunk } from '../../../../../shared/lib/tests/TestAsyncFunc/TestAsyncThunk'

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastName: 'Chabalov',
    firstName: 'asd',
    city: 'asf',
    currency: Currency.USD,
}

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ data }))

        const result = await thunk.callThunk()

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })
    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.meta.requestStatus).toEqual([ValidateProfileError.SERVER_ERROR])
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, firstName: '' },
            },
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.meta.requestStatus).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })
})
