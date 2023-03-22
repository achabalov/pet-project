import React, { ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const initTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
    initialTheme?: Theme
    children?: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || initTheme)

    const defaultTheme = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    )

    return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>
}
