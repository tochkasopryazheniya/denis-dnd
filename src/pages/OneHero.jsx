import React, {useState} from 'react';
import Header from "../components/Header/Header";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../http";
import {useQuery} from "react-query";
import Loader from "../components/Loader/Loader";
import arrow from '../assets/img/arrowDown1.png'

const fetchOnePlayer = async (id) => {
    const {data} = await axios.get(`${API_URL}/api/heroes/${id}?populate=deep,3`);
    return data.data;
}

const OneHero = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useQuery('oneHero', () => fetchOnePlayer(id));
    const [isHistoryShown, setIsHistoryShown] = useState(false);

    const showHistory = () => {
        setIsHistoryShown(!isHistoryShown)
    }

    let lvlPercentage = 0;

    if (data) {
        const difference = data.attributes.nextLvl - data.attributes.prevLvl;
        const nowExp = data.attributes.experience - data.attributes.prevLvl;
        lvlPercentage = Math.floor(nowExp * 100 / difference)
    }


    if (isLoading) {
        return <Loader/>
    }

    if (isError) {
        alert('Ошибка');
    }


    return (
        <>
            <Header/>
            <div className="container">
                <div className="oneHero">
                    <div className="oneHero-header">
                        <img className='oneHero-avatar' src={`${API_URL}${data.attributes.avatar.data.attributes.url}`}
                             alt=""/>

                        <div className="oneHero-header-info">
                            <div className="oneHero-header-name">{data.attributes.name}</div>
                            <div className='oneHero-lvlBlock'>
                                <div className="oneHero-header-level">{data.attributes.level} lvl</div>
                                <div className='progress'>
                                    <div
                                        style={{width: `${lvlPercentage}%`}}
                                        className='progress__inner'
                                    ></div>
                                    <div className='progress-exp'>{data.attributes.experience} exp</div>
                                </div>
                            </div>

                            <div className='oneHero-adventure'>{data.attributes.adventure.data.attributes.name}</div>
                        </div>

                    </div>

                    <div className="oneHero-history">
                        <div className='oneHero-history-title'>История</div>
                        <div className='oneHero-history-text'>{data.attributes.history}</div>
                    </div>

                    <div className="oneHero-history-mobile oneHero-history">
                        <div onClick={showHistory} className='oneHero-history-mobileContent'>
                            <div className='oneHero-history-title'>История</div>
                            <img className='oneHero-history-mobileImg' src={arrow} alt=""/>
                        </div>
                        <div className={`oneHero-history-text ${isHistoryShown ? '' : 'hide'}`}>{data.attributes.history}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OneHero;