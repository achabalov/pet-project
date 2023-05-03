import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ProfilePage } from 'pages/ProfilePage'
import { StoreDecorator } from 'shared/config/Storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/config/theme/lib/ThemeContext'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Russia,
                lastName: 'Chabalov',
                firstName: 'asd',
                city: 'asf',
                currency: Currency.USD,
            },
        },
    }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 29,
                country: Country.Russia,
                lastName: 'Alexander',
                firstName: 'Chabalov',
                city: 'Moscow',
                currency: Currency.USD,
            },
        },
    }),
]
