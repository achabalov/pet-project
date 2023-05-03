import { Country } from '../../../../Country/model/types/country'
import { Currency } from '../../../../Currency/model/types/types'
import { fetchProfileData } from './fetchProfileData'
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

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))

        const result = await thunk.callThunk()

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })
    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
