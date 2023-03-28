import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/config'
import { StoreDecorator } from 'shared/config/Storybook/StoreDecorator/StoreDecorator'
import { Navbar } from './Navbar'

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {
    to: '/',
}
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {
    to: '/',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.decorators = [StoreDecorator({})]

export const AuthNavbar = Template.bind({})
AuthNavbar.args = {
    to: '/',
}
AuthNavbar.decorators = [ThemeDecorator(Theme.DARK)]
AuthNavbar.decorators = [
    StoreDecorator({
        user: { authData: { username: 'admin' } },
    }),
]
