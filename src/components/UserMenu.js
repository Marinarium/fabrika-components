import React from 'react'

function UserMenu() {
    return (
        <nav className="user-menu">
                <ul className="user-menu__list">
                    <li className="user-menu__item">
                        <a href="./" className="user-menu__link user-menu__link_in">Sign in</a>
                    </li>
                    <li class="user-menu__item">
                        <a href="sign-up" className="user-menu__link user-menu__link_up">Sign up</a>
                    </li>
                </ul>
        </nav>
    )
}

export default UserMenu