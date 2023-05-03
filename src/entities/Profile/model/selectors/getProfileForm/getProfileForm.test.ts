import { StateSchema } from 'app/providers/StoreProvider'
import { Currency } from '../../../../Currency/model/types/types'
import { Country } from '../../../../Country/model/types/country'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
    test('should return form', () => {
        const form = {
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
                form,
            },
        }
        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
