import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { render, screen } from '@testing-library/react'

describe('button', () => {
    test('check text', () => {
        render(<Button>TEXT</Button>)
        expect(screen.getByText('TEXT')).toBeInTheDocument()
    })

    test('check class and text', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEXT</Button>)
        expect(screen.getByText('TEXT')).toBeInTheDocument()
        expect(screen.getByText('TEXT')).toHaveClass('clear')
        screen.debug()
    })
})
