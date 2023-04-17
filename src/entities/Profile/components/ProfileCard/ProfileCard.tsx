import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Avatar, Loader } from 'shared/ui'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'
import styles from './ProfileCard.module.scss'
import { Profile } from '../../model/types/profile'

interface ProfileCardProps {
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeLastname?: (value: string) => void
    onChangeFirstname?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeAge?: (value: string | number) => void
    onChangeUsername?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeCurrency?: (value: Currency) => void
    onChangeCountry?: (value: Country) => void
}

export const ProfileCard = memo(
    ({
        data,
        error,
        isLoading,
        onChangeLastname,
        onChangeFirstname,
        readonly,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    }: ProfileCardProps) => {
        const { t } = useTranslation('profile')

        const mods: Mods = {
            [styles.editing]: readonly,
        }
        if (isLoading) {
            return (
                <div className={classNames(styles.ProfileCard, {}, [styles.loading])}>
                    <Loader />
                </div>
            )
        }

        if (error) {
            return (
                <div className={classNames(styles.ProfileCard, {}, [styles.error])}>
                    <Text
                        title={t('Произошла ошибка при загрузке профиля')}
                        text={t('Попробуйте обновить страницу')}
                        theme={TextTheme.ERROR}
                    />
                </div>
            )
        }

        return (
            <div className={classNames(styles.ProfileCard, mods)}>
                <div className={styles.data}>
                    {data?.avatar && (
                        <div className={styles.avatarWrapper}>
                            <Avatar src={data?.avatar} size={150} />
                        </div>
                    )}
                    <Input
                        readonly={readonly}
                        className={styles.input}
                        type="text"
                        value={data?.firstName}
                        placeholder={t('Ваше имя')}
                        onChange={onChangeFirstname}
                    />
                    <Input
                        readonly={readonly}
                        className={styles.input}
                        type="text"
                        value={data?.lastName}
                        placeholder={t('Ваша фамилия')}
                        onChange={onChangeLastname}
                    />
                    <Input
                        readonly={readonly}
                        className={styles.input}
                        type="text"
                        value={data?.city}
                        placeholder={t('Ваш город')}
                        onChange={onChangeCity}
                    />
                    <Input
                        readonly={readonly}
                        className={styles.input}
                        type="text"
                        value={data?.age}
                        placeholder={t('Ваш возраст')}
                        onChange={onChangeAge}
                    />
                    <Input
                        readonly={readonly}
                        className={styles.input}
                        type="text"
                        value={data?.username}
                        placeholder={t('Введите имя пользователя')}
                        onChange={onChangeUsername}
                    />
                    <Input
                        readonly={readonly}
                        className={styles.input}
                        type="text"
                        value={data?.avatar}
                        placeholder={t('Введите ссылку на аватар')}
                        onChange={onChangeAvatar}
                    />
                    <CurrencySelect
                        className={styles.input}
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                    />
                    <CountrySelect
                        className={styles.input}
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                    />
                </div>
            </div>
        )
    }
)
