import React, { FC, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import styles from './ProfilePage.module.scss'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation('link')
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProfileData())
    }, [fetchProfileData])
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(styles.NotFoundPage, {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
