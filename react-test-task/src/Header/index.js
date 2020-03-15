import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink exact to='/'>
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/news'>
                        Новости
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profile'>
                        Профиль
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

