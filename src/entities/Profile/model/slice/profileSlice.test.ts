import { updateProfileData } from 'entities/Profile'
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData'
import { profileActions, profileReducer } from './profileSlice'
import { ProfileSchema, ValidateProfileError } from '../types/profile'
import { Country } from '../../../Country/model/types/country'
import { Currency } from '../../../Currency/model/types/types'

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastName: 'Chabalov',
    firstName: 'asd',
    city: 'asf',
    currency: Currency.USD,
}

describe('test ProfileSlice', () => {
    test('should readonly true', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
            readonly: true,
        })
    })

    test('should updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: data }
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ firstName: 'Alexan' })
            )
        ).toEqual({
            ...data,
            firstName: 'Alexan',
        })
    })

    test('should cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { firstName: 'Aleksey' } }
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            isLoading: false,
            readonly: false,
            error: '',
            data,
            form: data,
        })
    })

    test('should updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { firstName: 'Aleksey' } }
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ firstName: 'Alexander' })
            )
        ).toEqual({
            form: { firstName: 'Alexander' },
        })
    })

    test('should updateProfile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: [],
        })
    })

    test('should updateProfile service fulfield', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        }
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))
        ).toEqual({
            data,
            form: data,
            error: undefined,
            isLoading: false,
            readonly: true,
        })
    })
})
