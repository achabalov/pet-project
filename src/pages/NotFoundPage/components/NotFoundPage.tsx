import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.scss'

interface NotFoundProps {
    className?: string
}

export const NotFoundPage = memo(({ className }: NotFoundProps) => {
    const { t } = useTranslation('not_found')
    return (
        <div className={classNames(styles.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    )
})
