import { classNames } from './classNames'

describe('classNames', () => {
    test('main class', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with mods', () => {
        expect(classNames('someClass', { visible: true })).toBe('someClass visible')
    })

    test('with additional', () => {
        expect(classNames('someClass', {}, ['additional'])).toBe('someClass additional')
    })

    test('with mods and additional', () => {
        expect(classNames('someClass', { visible: true }, ['additional'])).toBe('someClass visible additional')
    })

    test('with mods falsy and additional', () => {
        expect(classNames('someClass', { visible: true, required: false }, ['additional'])).toBe('someClass visible additional')
    })
})
