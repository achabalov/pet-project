import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/Storybook/StoreDecorator/StoreDecorator'
import { Theme } from 'shared/config/theme/lib/ThemeContext'
import ProfilePage from './ProfilePage'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    args: {},
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Secondary = Template.bind({})
Secondary.args = {}
Secondary.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
