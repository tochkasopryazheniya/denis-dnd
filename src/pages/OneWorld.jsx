import React from 'react';
import Header from "../components/Header/Header";
import axios from "axios";
import {API_URL} from "../http";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import Loader from "../components/Loader/Loader";

const fetchOneWorld = async (id) => {
    const {data} = await axios.get(`${API_URL}/api/worlds/${id}?populate=deep,3`);
    return data.data;
}

const OneWorld = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useQuery('oneWorld', () => fetchOneWorld(id));
    const navigate = useNavigate();

    const onAdventureNavigate = (id) => {
        navigate(`/adventures/${id}`)
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
                        <div className='playerInfo-heroes-title'>Приключения</div>
                        <div>
                            {data.attributes.adventures.data.map(adventure => {
                                return <img onClick={() => onAdventureNavigate(adventure.id)} className='playerInfo-heroesAvatar'
                                            key={adventure.id}
                                            src={`${API_URL}${adventure.attributes.icon.data.attributes.url}`}
                                            alt=""/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OneWorld;