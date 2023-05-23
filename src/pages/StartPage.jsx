import React from 'react';
import sword from '../assets/img/swords.png'
import user from '../assets/img/user.png'
import world from '../assets/img/globe.png'
import players from '../assets/img/players.png'
import {Link} from "react-router-dom";

const StartPage = () => {
    return (
        <div className='container'>
           <div className='start'>
               <Link to='/adventures' className='start-item'>
                   <img className='start-img' src={sword} alt="хуита"/>
                   <h3 className='start-title'>Приключения</h3>
               </Link>

               <Link to='/heroes' className='start-item'>
                   <img className='start-img' src={user} alt="хуита"/>
                   <h3 className='start-title'>Персонажи</h3>
               </Link>

               <Link to='/worlds' className='start-item'>
                   <img className='start-img' src={world} alt="хуита"/>
                   <h3 className='start-title'>Миры</h3>
               </Link>

               <Link to='/players' className='start-item'>
                   <img className='start-img' src={players} alt="хуита"/>
                   <h3 className='start-title'>Игроки</h3>
               </Link>

               <Link to='/aboutme' className='start-item last-link'>
                   <img className='start-img' src={sword} alt="хуита"/>
                   <h3 className='start-title'>Об авторе</h3>
               </Link>
           </div>
        </div>
    );
};

export default StartPage;