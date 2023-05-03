import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import Avatar from 'shared/assets/tests/Avatar.jpeg'
import { ProfileCard } from './ProfileCard'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {},
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
        firstName: 'Александр',
        lastName: 'Чабалов',
        age: 28,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Volgograd',
        username: 'admin',
        avatar: Avatar,
    },
}

export const Error = Template.bind({})
Error.args = {
    error: 'error',
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true,
}
