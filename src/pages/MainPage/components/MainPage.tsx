import React from 'react'
import { useTranslation } from 'react-i18next'

function MainPage() {
    const { t } = useTranslation('link')

    return <div>{t('Главная')}</div>
}

export default MainPage
