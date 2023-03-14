import React, { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme
    className?: string
}

export const Button: FC<ButtonProps> = ({ className, children, theme, ...props }) => (
    <button type="button" className={classNames(styles.Button, {}, [styles[theme], className])} {...props}>
        {children}
    </button>
)
