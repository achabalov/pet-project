import React, { memo, ReactNode } from 'react'
import Dark from 'shared/assets/icons/theme-dark.svg'
import Light from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'shared/config/theme/lib/useTheme'
import { Theme } from 'shared/config/theme/lib/ThemeContext'
import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
    children?: ReactNode
}

export const ThemeSwitcher = memo(({ className, children, ...props }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            {...props}
        >
            {theme === Theme.DARK ? <Dark /> : <Light />}
        </Button>
    )
})
