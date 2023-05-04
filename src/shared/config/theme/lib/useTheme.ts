import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export const useTheme = (): UseThemeResult => {
    const { setTheme, theme = Theme.LIGHT } = useContext(ThemeContext)

    const toggleTheme = () => {
        let newTheme: Theme
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT
                break
            case Theme.LIGHT:
                newTheme = Theme.ORANGE
                break
            case Theme.ORANGE:
                newTheme = Theme.DARK
                break

            default:
                newTheme = Theme.LIGHT
                break
        }
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        setTheme?.(newTheme)
    }

    return { theme, toggleTheme }
}
