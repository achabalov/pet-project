import {render} from "react-dom";
import App from './Components/App'
import './styles/index.scss'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./theme/ThemeProvides";

const root = document.querySelector('#root')
render(
    <BrowserRouter>
        <ThemeProvider><App/></ThemeProvider>
    </BrowserRouter>, root)