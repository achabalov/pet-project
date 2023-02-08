import React, { VFC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { AppLink } from 'shared/ui'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: VFC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation(['main', 'about'])
    return (
        <div className={classNames(styles.Navbar, {}, [styles[className]])}>
            <div className={styles.link}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/">
                    {t('Главная', { ns: 'main' })}
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about" className={styles.mainLink}>
                    {t('О сайте', { ns: 'about' })}
                </AppLink>
            </div>
        </div>
    )
}
