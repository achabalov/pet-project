import React, { FC } from 'react'
import './Loader.scss'

interface PageLoaderProps {
    className?: string
}

export const Loader: FC<PageLoaderProps> = () => (
    <div className="lds-circle">
        <div />
    </div>
)
