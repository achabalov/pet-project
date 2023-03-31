import React, { memo, useCallback, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { AppDispatch } from 'app/providers/StoreProvider'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import styles from './LoginForm.module.scss'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName'

interface LoginFormProps {
    className?: string
    autoFocus?: boolean
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
}

const LoginForm = memo(({ className, autoFocus, onSuccess }: LoginFormProps) => {
    const [isFocused, setIsFocused] = useState(false)
    const { t } = useTranslation('modalForm')
    const dispatch = useAppDispatch()

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)

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
    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [onSuccess, dispatch, password, username])

    useEffect(() => {
        const pressEnter = async (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                const result = await dispatch(loginByUsername({ username, password }))
                if (result.meta.requestStatus === 'fulfilled') {
                    onSuccess()
                }
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
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
        </DynamicModuleLoader>
    )
})

export default LoginForm
