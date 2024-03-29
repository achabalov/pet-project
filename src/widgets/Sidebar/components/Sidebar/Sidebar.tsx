import React, { memo, useMemo } from 'react'
import { useModalVisibility } from 'shared/hooks'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LangSwitcher } from 'features/LangSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import { SidebarItemsList } from 'widgets/Sidebar/model/items'
import { SidebarItem } from 'widgets/Sidebar/components/SIdebarItem/SidebarItem'
import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const { visibility, toggleVisibility } = useModalVisibility(false)

    const itemsList = useMemo(
        () =>
            SidebarItemsList.map((item) => (
                <SidebarItem key={item.path} item={item} collapsed={visibility} />
            )),
        [visibility]
    )

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: visibility }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={toggleVisibility}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={styles.collapsedBtn}
                square
                size={ButtonSize.L}
            >
                {visibility ? '>' : '<'}
            </Button>
            <div className={styles.items}>{itemsList}</div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={visibility} className={styles.langSwitcher} />
            </div>
        </div>
    )
})
