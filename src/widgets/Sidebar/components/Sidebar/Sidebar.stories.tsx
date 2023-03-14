import React from 'react'
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/config'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Sidebar } from './Sidebar'
import 'app/styles/index.scss'

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
