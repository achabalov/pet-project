import { render } from 'react-dom'
import App from './app/App'
import './app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import { ThemeProvider } from 'shared/config'

const root = document.querySelector('#root')
render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    root
)
