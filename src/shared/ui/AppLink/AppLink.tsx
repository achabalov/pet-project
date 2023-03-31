import React, { memo } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink = memo(
    ({ className, children, to, theme = AppLinkTheme.PRIMARY, ...props }: AppLinkProps) => (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            {...props}
        >
            {children}
        </Link>
    )
)
