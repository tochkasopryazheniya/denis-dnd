import React from 'react';
import Header from "../components/Header/Header";
import axios from "axios";
import {API_URL} from "../http";
import {useQuery} from "react-query";
import Loader from "../components/Loader/Loader";
import AboutItem from "../components/About/AboutItem";

const fetchAuthor = async () => {
    const {data} = await axios.get(`${API_URL}/api/autor/?populate=deep,3`);

    return data.data;
}

const About = () => {
    const {data, isLoading, isError} = useQuery('author', () => fetchAuthor());


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
                    </div>
                    <div className='playerInfo-name'>{data.attributes.name}</div>
                    <div style={{marginBottom: '10px', fontWeight: '600', fontSize: '25px'}}>Описание</div>
                    <div style={{marginBottom: '30px'}} className='playerInfo-name playerInfo-description'>
                        <div className='about-description'>{data.attributes.description}</div>
                    </div>

                    <div className="tasks">
                        <div className='tasks-title'>Текущие задачи</div>
                        {data.attributes.tasks.data.map(task => {
                            return <AboutItem key={task.id} data={task.attributes}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;