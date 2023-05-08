import React, { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { AppRoutesProps, routeConfig } from 'app/router/components/routeConfig'
import { RequireAuth } from 'app/router/components/RequireAuth'

function AppRouter() {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">{route.element}</div>
            </Suspense>
        )
        return (
            <Route
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
                key={route.path}
                path={route.path}
            />
        )
    }, [])

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
