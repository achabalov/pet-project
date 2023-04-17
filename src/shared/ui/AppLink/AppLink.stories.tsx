import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/config/theme/lib/ThemeContext'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
    title: 'widgets/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'text',
    },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
}

export const Secondary = Template.bind({})
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
}
Secondary.decorators = [ThemeDecorator(Theme.DARK)]
