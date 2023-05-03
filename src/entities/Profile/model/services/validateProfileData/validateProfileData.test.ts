import { ValidateProfileError } from '../../types/profile'
import { Country } from '../../../../Country/model/types/country'
import { Currency } from '../../../../Currency/model/types/types'
import { validateProfileData } from './validateProfileData'

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastName: 'Chabalov',
    firstName: 'asd',
    city: 'asf',
    currency: Currency.USD,
}

describe('validateProfileData.test', () => {
    test('success', () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })
    test('without firstname lastname', async () => {
        const result = validateProfileData({ ...data, firstName: '' })

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })
    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: 0 })

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })
    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined })

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    })
    test('incorrect all', async () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.NO_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.SERVER_ERROR,
        ])
    })
})
