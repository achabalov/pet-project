import React, { FC, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui'
import { useTheme } from 'shared/config'
import styles from './Modal.module.scss'

interface ModalProps {
    className?: string
    isOpen: boolean
    onClose: (bol: boolean) => void
    lazy?: boolean
}

export const Modal: FC<ModalProps> = ({ className, children, lazy, isOpen, onClose }) => {
    const [isMounted, setIsMounted] = useState(false)

    const { theme } = useTheme()
    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
    }

    const closeHandler = () => {
        onClose(!isOpen)
    }

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    useEffect(() => {
        const keyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose(false)
            }
        }
        window.addEventListener('keydown', keyDown)
        return () => {
            window.removeEventListener('keydown', keyDown)
        }
    }, [onClose])

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [styles[className], theme, 'app_modal'])}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
