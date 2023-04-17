import React, { memo, useCallback } from 'react'
import { Select } from 'shared/ui'
import { Country } from 'entities/Country'

interface CountrySelectProps {
    value?: Country
    onChange?: (val: Country) => void
    readonly?: boolean
    className?: string
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazahstan, content: Country.Kazahstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
]

export const CountrySelect = memo(
    ({ onChange, value, readonly, className }: CountrySelectProps) => {
        const onChangeHandler = useCallback((value: string) => {
            onChange?.(value as Country)
        }, [])

        return (
            <Select
                value={value}
                onChange={onChangeHandler}
                options={options}
                label="Укажите страну"
                readonly={readonly}
                className={className}
            />
        )
    }
)
