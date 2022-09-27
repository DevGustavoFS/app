import React from 'react'
import { LogoImage } from './styles'
import logoImage from '../../../../assets/LogoGoW.png'

const sizes = {
    small: 35,
    large: 100,
}

export const Logo = ({ size }) => {
    return (
        <LogoImage source={logoImage} size={sizes[size || 'large']}/>
    )
}