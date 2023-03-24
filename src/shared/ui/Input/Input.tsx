import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    value?: string
    onChange?: (value: string) => void
    type: 'text' | 'password'
    placeholder?: string
    autoFocus?: boolean
}

export const Input = memo(({ autoFocus, value, onChange, type = 'text', placeholder }: InputProps) => {
    const refInput = useRef<HTMLInputElement>(null)
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }
    useEffect(() => {
        if (refInput.current) {
            refInput.current.focus()
        }
    }, [autoFocus])
    return (
        <div className={classNames(styles.InputWrapper)}>
            {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
            <input ref={refInput} className={styles.input} type={type} value={value} onChange={onChangeHandler} />
        </div>
    )
})
