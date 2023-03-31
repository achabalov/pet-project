import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

export const Text = memo(({ className, title, theme = TextTheme.PRIMARY, text }: TextProps) => (
    <div className={classNames(styles.Text, { [styles[theme]]: true }, [styles[className]])}>
        {title && <p className={styles.title}>{title}</p>}
        {text && <p className={styles.text}>{text}</p>}
    </div>
))
