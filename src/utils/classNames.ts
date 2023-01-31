type Mode = Record<string, boolean | string>

export const classNames = (cls: string, mods?: Mode, additionalCls?: string[]): string => {
    return [
        cls,
        ...Object.entries(mods).filter(([cls, value]) => Boolean(value)).map(([cls]) => cls),
        ...additionalCls
    ].join(' ')
}