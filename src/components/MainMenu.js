import React from 'react'

function MainMenu() {
    return (
        <nav className="main-menu">
                <ul className="main-menu__list">
                    <li className="main-menu__item">
                        <a href="./" className="main-menu__link">Platform</a>
                    </li>
                    <li class="main-menu__item">
                        <a href="./" className="main-menu__link">Capabilities</a>
                    </li>
                    <li class="main-menu__item">
                        <a href="./" className="main-menu__link">Company</a>
                    </li>
                </ul>
        </nav>
    )
}

export default MainMenu