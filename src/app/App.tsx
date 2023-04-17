import React, { Suspense, useEffect } from 'react'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { classNames } from 'shared/lib/classNames/classNames'
import RouteConfig from 'shared/config/AppRouter/AppRouter'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { useTheme } from 'shared/config/theme/lib/useTheme'

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
