import React, { memo, useCallback, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName'
import { loginActions } from '../../model/slice/loginSlice'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
    autoFocus?: boolean
}

export const LoginForm = memo(({ className, autoFocus }: LoginFormProps) => {
    const [isFocused, setIsFocused] = useState(false)
    const { t } = useTranslation('modalForm')
    const dispatch = useDispatch()
    const { username, password, error, isLoading } = useSelector(getLoginState)

    const onChangeUsername = useCallback(
        (value) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch]
    )
    const onChangePassword = useCallback(
        (value) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch]
    )
    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    useEffect(() => {
        const pressEnter = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                // @ts-ignore
                dispatch(loginByUsername({ username, password }))
            }
        }
        window.addEventListener('keydown', pressEnter)

        return () => {
            window.removeEventListener('keydown', pressEnter)
        }
    }, [username, password, dispatch])

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true)
        } else {
            setIsFocused(false)
        }
    }, [autoFocus])
    return (
        <div className={classNames(styles.LoginForm, {}, [styles[className]])}>
            <Text title={t('Форма авторизации')} />
            {error && (
                <Text title={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />
            )}
            <Input
                onChange={onChangeUsername}
                value={username}
                autoFocus={isFocused}
                placeholder={t('Введите логин')}
                className={styles.input}
                type="text"
            />
            <Input
                onChange={onChangePassword}
                value={password}
                placeholder={t('Введите пароль')}
                className={styles.input}
                type="text"
            />
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                className={styles.loginBtn}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})
