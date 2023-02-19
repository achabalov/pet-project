import React, { Suspense } from 'react'
import './styles/index.scss'
import { useTheme } from 'shared/config'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { classNames } from 'shared/lib/classNames/classNames'
import RouteConfig from 'shared/config/routeConfig/routeConfig'

function App() {
    const { theme } = useTheme()

    return (
        <Suspense fallback="">
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <RouteConfig />
                </div>
            </div>
        </Suspense>
    )
}

export default App
