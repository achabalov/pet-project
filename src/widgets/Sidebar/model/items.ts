import React from 'react'
import { RoutePath } from 'app/router/components/routeConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import Profile from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        Icon: Profile,
        text: 'Профиль',
        authOnly: true,
    },
]
