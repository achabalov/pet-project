import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher: VFC<LangSwitcherProps> = ({ className, short }) => {
    const { t, i18n } = useTranslation('translation')
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button className={classNames(styles.LangSwitcher, {}, [className])} onClick={toggle}>
            {t(short ? 'language' : 'Язык')}
        </Button>
    )
}
