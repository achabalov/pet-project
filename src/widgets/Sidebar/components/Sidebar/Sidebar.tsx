import React, { FC } from 'react'
import { useModalVisibility } from 'shared/hooks'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LangSwitcher } from 'features/LangSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'app/router/components/AppRouter'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const { visibility, toggleVisibility } = useModalVisibility(false)
    const { t } = useTranslation(['main', 'about'])

    return (
        <div data-testid="sidebar" className={classNames(styles.Sidebar, { [styles.collapsed]: visibility }, [styles[className]])}>
            <Button
                data-testid="sidebar-toggle"
                onClick={toggleVisibility}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={styles.collapsedBtn}
                square
                size={ButtonSize.L}
            >
                {visibility ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={styles.item}>
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>{t('Главная', { ns: 'main' })}</span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={styles.item}>
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}> {t('О сайте', { ns: 'about' })}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={visibility} className={styles.langSwitcher} />
            </div>
        </div>
    )
}
