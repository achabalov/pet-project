import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/Storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../src/shared/config/theme/lib/ThemeContext'
import { RouteDecorator } from '../../src/shared/config/Storybook/RouteDecorator/RouteDecorator'

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
addDecorator(RouteDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
