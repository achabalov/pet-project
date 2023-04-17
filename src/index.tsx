import { render } from 'react-dom'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoreProvider'
import App from './app/App'
import './app/styles/index.scss'
import 'shared/config/i18n/i18n'
import { ThemeProvider } from 'shared/config/theme/components/ThemeProvides'

const root = document.querySelector('#root')
render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    root
)
