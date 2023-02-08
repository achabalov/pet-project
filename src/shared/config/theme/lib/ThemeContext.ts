import React from "react";

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export interface ThemeContextProps {
    theme?: Theme,
    setTheme?: (theme: Theme) => void
}

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export const ThemeContext = React.createContext<ThemeContextProps>({})