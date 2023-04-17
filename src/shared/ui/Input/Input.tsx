import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    value?: string | number
    onChange?: (value: string) => void
    type: 'text' | 'password'
    placeholder?: string
    autoFocus?: boolean
    readonly?: boolean
}

export const Input = memo(
    ({ autoFocus, value, onChange, type = 'text', placeholder, readonly }: InputProps) => {
        const refInput = useRef<HTMLInputElement>(null)
        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value)
        }
        useEffect(() => {
            if (refInput.current) {
                refInput.current.focus()
            }
        }, [autoFocus])

        const mods: Mods = {
            [styles.readonly]: readonly,
        }
        return (
            <div className={classNames(styles.InputWrapper)}>
                {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
                <input
                    readOnly={readonly}
                    ref={refInput}
                    className={classNames(styles.input, mods)}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                />
            </div>
        )
    }
)
