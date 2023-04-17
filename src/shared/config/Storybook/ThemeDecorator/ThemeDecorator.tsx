import { Story } from '@storybook/react'
import { Theme } from 'shared/config/theme/lib/ThemeContext'
import { ThemeProvider } from 'shared/config/theme/components/ThemeProvides'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    )
