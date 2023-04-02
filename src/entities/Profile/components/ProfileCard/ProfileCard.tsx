import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import styles from './ProfileCard.module.scss'

interface ProfileCardProps {}

export const ProfileCard = memo(() => {
    const { t } = useTranslation('profile')
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const isError = useSelector(getProfileError)

    return (
        <div className={styles.ProfileCard}>
            <div className={styles.header}>
                <Text title={t('Профиль')} />
                <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={styles.data}>
                <Input
                    className={styles.input}
                    type="text"
                    value={data?.firstName}
                    placeholder={t('Ваше имя')}
                />
                <Input
                    className={styles.input}
                    type="text"
                    value={data?.lastName}
                    placeholder={t('Ваша фамилия')}
                />
            </div>
        </div>
    )
})
