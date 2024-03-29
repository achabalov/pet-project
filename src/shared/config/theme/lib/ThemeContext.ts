import React from 'react'

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    ORANGE = 'app_orange_theme',
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({})
