import React, { ButtonHTMLAttributes, FC } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import disableAutomock = jest.disableAutomock

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    L = 'size_l',
    M = 'size_m',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme
    className?: string
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
    className,
    size = ButtonSize.M,
    children,
    disabled,
    square,
    theme = ButtonTheme.OUTLINE,
    ...props
}) => {
    const mods: Mods = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
    }
    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [styles[theme], className])}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}
