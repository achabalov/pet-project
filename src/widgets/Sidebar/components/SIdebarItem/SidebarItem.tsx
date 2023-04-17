import React, { FC, memo } from 'react'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { SidebarItemType } from 'widgets/Sidebar/model/items'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getUserData } from 'entities/User'
import styles from './SidebarItem.module.scss'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo(({ collapsed, item }: SidebarItemProps) => {
    const { t } = useTranslation('link')

    const isAuth = useSelector(getUserData)

    if (item.authOnly && !isAuth) {
        return null
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(styles.item, { [styles.collapsed]: collapsed })}
        >
            <item.Icon className={styles.icon} />
            <span className={styles.link}>{t(item.text)}</span>
        </AppLink>
    )
})
