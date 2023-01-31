import React from 'react'
import MainPageAsync from "../MainPage/MainPage.async";

const AboutAsync = React.lazy(() => import('./AboutPage'))

export default AboutAsync