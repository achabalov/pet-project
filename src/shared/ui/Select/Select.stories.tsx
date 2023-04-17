import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from 'shared/ui'

export default {
    title: 'widgets/Select',
    component: Select,
    args: {},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Укажите значение',
    options: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
        { value: '12345', content: 'Третий пункт' },
    ],
}

export const Small = Template.bind({})
Small.args = {}
