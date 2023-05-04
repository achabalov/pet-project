import React, { CSSProperties, memo, useMemo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import styles from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar = memo(({ className, src, size, alt }: AvatarProps) => {
    const mods: Mods = {}
    const style = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size]
    )
    return (
        <img
            src={src}
            style={style}
            alt={alt}
            className={classNames(styles.Avatar, mods, [className])}
        />
    )
})
