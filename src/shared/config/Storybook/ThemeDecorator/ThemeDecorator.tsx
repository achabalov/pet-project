import 'app/styles/index.scss'
import { Story } from '@storybook/react'
import { Theme, ThemeProvider } from 'shared/config'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={Theme.DARK}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    )
