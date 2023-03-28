import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import 'app/styles/index.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/config'

export default {
    title: 'shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'title',
    text: 'text',
}

export const onlyTitle = Template.bind({})
onlyTitle.args = {
    title: 'title',
}

export const onlyText = Template.bind({})
onlyText.args = {
    text: 'text',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'title',
    text: 'text',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
    title: 'title',
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
    text: 'text',
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({})
Error.args = {
    title: 'title',
    text: 'text',
    theme: TextTheme.ERROR,
}
