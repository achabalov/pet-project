import 'app/styles/index.scss'
import { Story } from '@storybook/react'
import { Theme } from 'shared/config'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    )
