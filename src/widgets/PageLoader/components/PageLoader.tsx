import React, { VFC } from 'react'
import { Loader } from 'shared/ui'
import styles from './PageLoader.module.scss'

export const PageLoader: VFC = () => (
    <div className={styles.Loader}>
        <Loader />
    </div>
)
