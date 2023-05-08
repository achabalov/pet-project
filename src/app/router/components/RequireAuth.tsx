import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { getUserData } from 'entities/User'
import { Navigate, useLocation } from 'react-router-dom'
import { AppRoutes } from 'app/router/components/routeConfig'

interface RequireAuthProps {
    children: JSX.Element
}

export const RequireAuth = memo(({ children }: RequireAuthProps) => {
    const auth = useSelector(getUserData)
    const location = useLocation()

    if (!auth) {
        return <Navigate to={AppRoutes.MAIN} state={{ from: location }} replace />
    }
    return children
})
