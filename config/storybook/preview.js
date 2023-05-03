import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/Storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/Storybook/RouterDecorator/RouterDecorator'
import { Theme } from '../../src/shared/config/theme/lib/ThemeContext'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
