import React from 'react';
import axios from "axios";
import {API_URL} from "../http";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";

const fetchOneAdventure = async (id) => {
    const {data} = await axios.get(`${API_URL}/api/adventures/${id}?populate=deep,3`);
    return data.data;
}

const OneAdventure = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useQuery('onePlayer', () => fetchOneAdventure(id));
    const navigate = useNavigate();

    const onNavigateHero = (id) => {
        navigate(`/heroes/${id}`)
    }

    if (isLoading) {
        return <Loader/>
    }

    if (isError) {
        alert('ОШИБКА')
    }


    return (
        <>
            <Header/>
            <div className='container'>
                <div className="playerInfo">
                    <div className='avatar-block'>
                        <img className='playerInfo-avatar'
                             src={`${API_URL}${data.attributes.icon.data.attributes.url}`}
                             alt=""/>
                    </div>
                    <div className='playerInfo-name'>{data.attributes.name}</div>
                    <div style={{marginBottom: '10px', fontWeight: '600', fontSize: '25px'}}>Описание</div>
                    <div style={{marginBottom: '30px'}} className='playerInfo-name playerInfo-description'>
                        <div style={{textAlign: 'left'}}>{data.attributes.description}</div>
                    </div>

                    <div style={{marginBottom: '30px'}} className='playerInfo-heroes'>
                        <div className='playerInfo-heroes-title'>Герои</div>
                        <div>
                            {data.attributes.heroes.data.map(hero => {
                                return <img onClick={() => onNavigateHero(hero.id)} className='playerInfo-heroesAvatar'
                                            key={hero.id}
                                            src={`${API_URL}${hero.attributes.avatar.data.attributes.url}`}
                                            alt=""/>
                            })}
                        </div>
                    </div>

                    {/*<div style={{marginBottom: '30px'}} className='playerInfo-heroes'>*/}
                    {/*    <div className='playerInfo-heroes-title'>Достижения</div>*/}

                    {/*</div>*/}
                </div>
            </div>
        </>
    );
};

export default OneAdventure;