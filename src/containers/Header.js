
import React from 'react'
import Logo from '../components/Logo'
import MainMenu from '../components/MainMenu'
import UserMenu from '../components/UserMenu'

function Header() {
    return (
        <header className="header">
            <Logo />
            <MainMenu />
            <UserMenu />
        </header>
    )
}

export default Header