import React, {Suspense, useContext, useState} from 'react';
import '../styles/index.scss'
import {Routes, Route, Link} from 'react-router-dom'
import AboutPage from "../pages/AboutPage/AboutPage.async";
import MainPage from "../pages/MainPage/MainPage.async";
import {useTheme} from "../theme/useTheme";
import {classNames} from "../utils/classNames";

const App = () => {

    const {toggleTheme, theme} = useTheme()

    return (
        <div className={classNames('app', {'lern': true}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>Страница об</Link>
            <Suspense fallback={<div>Идет загрузка</div>}>
                <Routes>
                    <Route element={<AboutPage/>} path={'/about'}/>
                    <Route element={<MainPage/>} path={'/'}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;