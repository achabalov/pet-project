import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/config'
import { NotFoundPage } from './NotFoundPage'

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    args: {},
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {}
Secondary.decorators = [ThemeDecorator(Theme.DARK)]
