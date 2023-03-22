import React, { useCallback, useState, VFC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import styles from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: VFC<NavbarProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false)

    const { t } = useTranslation()

    const onToggleModal = useCallback(() => {
        setIsOpen(true)
    }, [])

    return (
        <div className={classNames(styles.Navbar, {}, [styles[className]])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={styles.link} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isOpen} onClose={setIsOpen}>
                loremloremloremloremloremloremloremloremloremloremloremloremloremloremlor lore loremlorem loremм loremmem
            </Modal>
        </div>
    )
}
