import React, { useCallback, useState, VFC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import styles from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: VFC<NavbarProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false)

    const { t } = useTranslation()

    const onCloseModal = useCallback(() => {
        setIsOpen(false)
    }, [])
    const onShowModal = useCallback(() => {
        setIsOpen(true)
    }, [])

    return (
        <div className={classNames(styles.Navbar, {}, [styles[className]])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={styles.link} onClick={onShowModal}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isOpen} onClose={onCloseModal} />
        </div>
    )
}
