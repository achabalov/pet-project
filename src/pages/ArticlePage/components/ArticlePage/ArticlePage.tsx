import React, { FC, memo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import styles from './ArticlePage.module.scss'

interface ArticlePageProps {
    className?: string
}

const ArticlePage: FC<ArticlePageProps> = ({ className, children }) => {
    const mods: Mods = {}
    return <div className={classNames(styles.ArticlePage, mods, [className])}>ARTICLE PAGE</div>
}

export default memo(ArticlePage)
