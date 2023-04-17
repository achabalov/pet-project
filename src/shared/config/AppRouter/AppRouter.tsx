import React, { memo, Suspense, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'app/router'
import { PageLoader } from 'widgets/PageLoader'
import { useSelector } from 'react-redux'
import { getUserData } from 'entities/User'

function AppRouter() {
    const isAuth = useSelector(getUserData)

    const routes = useMemo(
        () =>
            Object.values(routeConfig).filter((route) => {
                if (route.authOnly && !isAuth) {
                    return false
                }
                return true
            }),
        [isAuth]
    )
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default memo(AppRouter)
