import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import AvatarIcon from '../../assets/tests/Avatar.jpeg'
import { Avatar } from './Avatar'

export default {
    title: 'widgets/Avatar',
    component: Avatar,
    args: {
        to: '/',
        children: 'text',
    },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const AvatarSmall = Template.bind({})
AvatarSmall.args = {
    src: AvatarIcon,
    size: 50,
    alt: 'avatar',
}

export const AvatarLarge = Template.bind({})
AvatarLarge.args = {
    src: AvatarIcon,
    size: 150,
    alt: 'avatar',
}
