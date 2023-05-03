import React from 'react'
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Sidebar } from './Sidebar'
import 'app/styles/index.scss'
import { Theme } from 'shared/config/theme/lib/ThemeContext'
import { StoreDecorator } from 'shared/config/Storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ user: { authData: {} } })]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })]

export const NoAuth = Template.bind({})
NoAuth.args = {}
NoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: {} })]
