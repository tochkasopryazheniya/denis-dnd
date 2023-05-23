import React from 'react';
import axios from "axios";
import {API_URL} from "../http";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";

const fetchOnePlayer = async (id) => {
    const {data} = await axios.get(`${API_URL}/api/players/${id}?populate=deep,3`);

    return data.data;
}

const OnePlayer = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useQuery('onePlayer', () => fetchOnePlayer(id));
    const navigate = useNavigate();

    const onHeroNavigate = (id) => {
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
                        <img className='playerInfo-avatar' src={`${API_URL}${data.attributes.avatar.data.attributes.url}`}
                             alt=""/>
                        <div className="rating">{data.attributes.rating}</div>
                    </div>
                    <div className='playerInfo-name'>{data.attributes.name}</div>
                    <div style={{marginBottom: '10px', fontWeight: '600', fontSize: '25px'}}>Описание</div>
                    <div style={{marginBottom: '30px'}} className='playerInfo-name playerInfo-description'>
                        <div>{data.attributes.description}</div>
                    </div>

                    <div style={{marginBottom: '30px'}} className='playerInfo-heroes'>
                        <div className='playerInfo-heroes-title'>Герои</div>
                        <div>
                            {data.attributes.heroes.data.map(hero => {
                                return <img onClick={() => onHeroNavigate(hero.id)} className='playerInfo-heroesAvatar'
                                            key={hero.id} src={`${API_URL}${hero.attributes.avatar.data.attributes.url}`}
                                            alt=""/>
                            })}
                        </div>
                    </div>

                    <div style={{marginBottom: '30px'}} className='playerInfo-heroes'>
                        <div className='playerInfo-heroes-title'>Достижения</div>
                        <div className='playerInfo-achievements'>
                            {data?.attributes?.achievements?.data.map(achiev => {
                                return (
                                    <div key={achiev.id} className='playerInfo-achievement'>
                                        <img className='achievement-avatar'
                                             src={`${API_URL}${achiev.attributes.avatar.data.attributes.url}`} alt=""/>
                                        <div>
                                            <div className='achievement-upperTitle'>{achiev.attributes.name}</div>
                                            <div className='achievement-text'>{achiev.attributes.description}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OnePlayer;