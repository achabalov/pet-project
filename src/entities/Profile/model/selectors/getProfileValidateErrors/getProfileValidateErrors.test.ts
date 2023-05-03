import { StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileError } from '../../types/profile'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileForm', () => {
    test('should return form', () => {
        const validateErrors = [ValidateProfileError.INCORRECT_USER_DATA]
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors,
            },
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
