import { StateSchema } from 'app/providers/StoreProvider'
import { Currency } from '../../../../Currency/model/types/types'
import { Country } from '../../../../Country/model/types/country'
import { getProfileData } from './getProfileData'

describe('getProfileData', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastName: 'Chabalov',
            firstName: 'asd',
            city: 'asf',
            currency: Currency.USD,
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
