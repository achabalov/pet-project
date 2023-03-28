import React, { Suspense, useEffect } from 'react'
import { useTheme } from 'shared/config'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { classNames } from 'shared/lib/classNames/classNames'
import RouteConfig from 'shared/config/routeConfig/routeConfig'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

function App() {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

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
