import React, { FC, memo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import styles from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className, children }) => {
    const mods: Mods = {}
    return (
        <div className={classNames(styles.ArticleDetailsPage, mods, [className])}>
            ARTICLEDEfailt
        </div>
    )
}

export default memo(ArticleDetailsPage)
