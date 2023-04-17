import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import MainPage from './MainPage'

export default {
    title: 'pages/MainPage',
    component: MainPage,
    args: {},
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => <MainPage />

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {}
