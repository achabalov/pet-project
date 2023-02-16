import React, { useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const initTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(initTheme)

    const defaultTheme = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    )

    return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>
}
