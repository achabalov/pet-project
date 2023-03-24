import React, { FC, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
    autoFocus?: boolean
}

export const LoginForm: FC<LoginFormProps> = ({ className, autoFocus }) => {
    const [isFocused, setIsFocused] = useState(false)
    const { t } = useTranslation('modalForm')

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true)
        } else {
            setIsFocused(false)
        }
    }, [autoFocus])
    return (
        <div className={classNames(styles.LoginForm, {}, [styles[className]])}>
            <Input autoFocus={isFocused} placeholder={t('Введите логин')} className={styles.input} type="text" />
            <Input placeholder={t('Введите пароль')} className={styles.input} type="text" />
            <Button className={styles.loginBtn}>{t('Войти')}</Button>
        </div>
    )
}
