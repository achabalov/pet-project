import React, { FC } from 'react'
import { Theme, useTheme } from 'shared/config'
import Dark from 'shared/assets/icons/theme-dark.svg'
import Light from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'utils/classNames'
import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className, children, ...props }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(styles.ThemeSwitcher, {}, [className, styles[className]])}
            onClick={toggleTheme}
            {...props}
        >
            {theme === Theme.DARK ? <Dark /> : <Light />}
        </Button>
    )
}
