import React, { VFC } from 'react'
import { AppLink } from 'shared/ui'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: VFC<NavbarProps> = ({ className }) => (
    <div className={classNames(styles.Navbar, {}, [styles[className]])}>
        <div className={styles.link} />
    </div>
)
