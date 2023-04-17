import React, { FC, memo, useCallback } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import styles from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = memo(() => {
    const { t } = useTranslation('profile')

    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={styles.ProfilePageHeader}>
            <Text title={t('Профиль')} />
            {readonly ? (
                <Button onClick={onEdit} className={styles.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            ) : (
                <>
                    <Button
                        onClick={onCancelEdit}
                        className={styles.editBtn}
                        theme={ButtonTheme.OUTLINE_RED}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button onClick={onSave} className={styles.saveBtn} theme={ButtonTheme.OUTLINE}>
                        {t('Сохранить')}
                    </Button>
                </>
            )}
        </div>
    )
})
