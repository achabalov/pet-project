import React, { FC, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from 'features/AuthByUsername/components/LoginForm/LoginForm.async'
import { Loader } from 'shared/ui'
import styles from './LoginModal.module.scss'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
    <Modal
        lazy
        onClose={onClose}
        isOpen={isOpen}
        className={classNames(styles.LoginModal, {}, [styles[className]])}
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
)
