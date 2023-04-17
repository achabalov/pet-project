import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/config/theme/lib/ThemeContext'
import { Loader } from './Loader'

export default {
    title: 'widgets/AppLink',
    component: Loader,
    args: {},
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {}
Secondary.decorators = [ThemeDecorator(Theme.DARK)]
