import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import styles from './LoginModal.module.scss'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
    <Modal lazy onClose={onClose} isOpen={isOpen} className={classNames(styles.LoginModal, {}, [styles[className]])}>
        <LoginForm autoFocus={isOpen} />
    </Modal>
)
