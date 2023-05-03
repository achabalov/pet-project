import React, { FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    fetchProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { classNames } from 'shared/lib/classNames/classNames'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import styles from './ProfilePage.module.scss'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation('profile')
    const readonly = useSelector(getProfileReadonly)
    const data = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const isError = useSelector(getProfileError)
    const dispatch = useAppDispatch()
    const validateErrors = useSelector(getProfileValidateErrors)

    const validateErrorTranslate = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательные поля'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Страна обязательное поле'),
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    }

    const onChangeFirstname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ firstName: value }))
        },
        [dispatch]
    )

    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ lastName: value }))
        },
        [dispatch]
    )
    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ city: value }))
        },
        [dispatch]
    )
    const onChangeAge = useCallback(
        (value: string | number) => {
            dispatch(profileActions.updateProfile({ age: Number(value) || 0 }))
        },
        [dispatch]
    )
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ username: value }))
        },
        [dispatch]
    )
    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ avatar: value }))
        },
        [dispatch]
    )
    const onChangeCurrency = useCallback(
        (value: Currency) => {
            dispatch(profileActions.updateProfile({ currency: value }))
        },
        [dispatch]
    )
    const onChangeCountry = useCallback(
        (value: Country) => {
            dispatch(profileActions.updateProfile({ country: value }))
        },
        [dispatch]
    )

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData())
        }
    }, [fetchProfileData, dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfilePageHeader />
            {validateErrors?.length &&
                validateErrors.map((err) => (
                    <Text key={err} theme={TextTheme.ERROR} text={validateErrorTranslate[err]} />
                ))}
            <div className={classNames(styles.NotFoundPage, {}, [className])}>
                <ProfileCard
                    data={data}
                    isLoading={isLoading}
                    error={isError}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    readonly={readonly}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
