import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
    element?: HTMLElement
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props

    // @ts-ignore
    // this problem depend on peer Dependency another libraries @types/react
    // I will try to solve this problem by switching to react 18
    return createPortal(children, element)
}
