import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import 'app/styles/index.scss'
import { Modal } from 'shared/ui/Modal/Modal'

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'lorem ipsum',
}

export const Clear = Template.bind({})
Clear.args = {
    isOpen: true,
    children: 'Text',
}
