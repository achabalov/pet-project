import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/config'
import MainPage from './MainPage'

export default {
    title: 'pages/MainPage',
    component: MainPage,
    args: {},
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args: {}) => <MainPage {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {}
Secondary.decorators = [ThemeDecorator(Theme.DARK)]
