import React, { FC, useEffect } from 'react'
import { useModalVisibility } from 'shared/hooks'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LangSwitcher } from 'features/LangSwitcher'
import { classNames } from 'utils/classNames'
import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const { visibility, toggleVisibility } = useModalVisibility(false)
    useEffect(() => {
        if (visibility) {
            toggleVisibility()
        }
    }, [])
    return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: visibility }, [styles[className]])}>
            <Button onClick={toggleVisibility}>toggle</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.langSwitcher} />
            </div>
        </div>
    )
}
