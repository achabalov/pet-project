import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/config/theme/lib/ThemeContext'
import AboutPage from './AboutPage'

export default {
    title: 'pages/AppLink',
    component: AboutPage,
    args: {},
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {}
Secondary.decorators = [ThemeDecorator(Theme.DARK)]
