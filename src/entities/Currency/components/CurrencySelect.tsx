import React, { memo, useCallback } from 'react'
import { Select } from 'shared/ui'
import { Currency } from 'entities/Currency'

interface CurrencySelectProps {
    value?: Currency
    onChange?: (val: Currency) => void
    readonly?: boolean
    className?: string
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = memo(
    ({ onChange, value, readonly, className }: CurrencySelectProps) => {
        const onChangeHandler = useCallback((value: string) => {
            onChange?.(value as Currency)
        }, [])

        return (
            <Select
                value={value}
                onChange={onChangeHandler}
                options={options}
                label="Укажите валюту"
                readonly={readonly}
                className={className}
            />
        )
    }
)
