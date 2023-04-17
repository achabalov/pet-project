import React, { ChangeEvent, memo, useCallback, useMemo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import styles from './Select.module.scss'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    value?: string
    className?: string
    label?: string
    options?: SelectOption[]
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo(
    ({ className, label, options, value, onChange, readonly }: SelectProps) => {
        const mods: Mods = {}

        const optionsList = useMemo(
            () =>
                options?.map((item) => (
                    <option key={item.value} className={styles.option} value={item.value}>
                        {item.content}
                    </option>
                )),
            [options]
        )

        const changeHandler = useCallback(
            (e: ChangeEvent<HTMLSelectElement>) => {
                onChange?.(e.target.value)
            },
            [value]
        )

        return (
            <div className={classNames(styles.Wrapper, mods, [className])}>
                {label && <span className={styles.label}>{`${label}>`}</span>}
                <select
                    value={value}
                    disabled={readonly}
                    onChange={changeHandler}
                    className={styles.select}
                >
                    {optionsList}
                </select>
            </div>
        )
    }
)
