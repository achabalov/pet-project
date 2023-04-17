import React, { FC, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    ProfileCard,
    profileReducer,
    profileActions,
    getProfileReadonly,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import styles from './ProfilePage.module.scss'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation('link')
    const readonly = useSelector(getProfileReadonly)
    const data = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const isError = useSelector(getProfileError)
    const dispatch = useAppDispatch()

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
        dispatch(fetchProfileData())
    }, [fetchProfileData, dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfilePageHeader />
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
