import { render } from 'react-dom'
import { ThemeProvider } from 'shared/config'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import './app/styles/index.scss'
import 'shared/config/i18n/i18n'

const root = document.querySelector('#root')
render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    root
)
