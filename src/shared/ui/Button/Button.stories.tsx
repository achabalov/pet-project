import React from 'react'
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/config'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, ButtonTheme } from './Button'
import 'app/styles/index.scss'

export default {
    title: 'shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Text',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
