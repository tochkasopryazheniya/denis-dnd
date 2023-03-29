import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    const [activeBurger, setActiveBurger] = useState(false);

    const onClickBurger = () => {
        setActiveBurger(!activeBurger)
    }



    return (
        <div className='header'>
            <div className="header-content">
                <NavLink to='/adventures' className='header-link'>Приключения</NavLink>
                <NavLink to='/heroes' className='header-link'>Персонажи</NavLink>
                <NavLink to='/worlds' className='header-link'>Миры</NavLink>
                <NavLink to='/players' className='header-link'>Игроки</NavLink>
                <NavLink to='/aboutme' className='header-link'>Об авторе</NavLink>
            </div>
            <div onClick={onClickBurger} className='burger-menu'>
                <div className="burger-body">
                    <div className={`burger-item ${activeBurger ? 'active-burger' : ''}`}></div>
                </div>
            </div>

            {activeBurger ? (
                <div className="header-mobile">
                    <NavLink to='/adventures' className='header-link header-link-mobile'>Приключения</NavLink>
                    <NavLink to='/heroes' className='header-link header-link-mobile'>Персонажи</NavLink>
                    <NavLink to='/worlds' className='header-link header-link-mobile'>Миры</NavLink>
                    <NavLink to='/players' className='header-link header-link-mobile'>Игроки</NavLink>
                    <NavLink to='/aboutme' className='header-link header-link-mobile'>Об авторе</NavLink>
                </div>
            ): ''}
        </div>
    );
};

export default Header;