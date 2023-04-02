import React from 'react';
import Header from "../components/Header/Header";
import {API_URL} from "../http";
import axios from "axios";
import {useQuery} from "react-query";
import Loader from "../components/Loader/Loader";
import PlayerCard from "../components/Players/PlayerCard";

const fetchPlayers = async () => {
    const {data} = await axios.get(`${API_URL}/api/players?populate=deep,3`);
    return data.data;
}

const Players = () => {
    const {data, isError, isLoading} = useQuery('allPlayers', fetchPlayers);

    if (isLoading) {
        return <Loader/>
    }

    if (isError) {
        alert('ОШИБКА')
    }

    console.log(data)
    return (
        <>
            <Header/>
            <div className="container">
                {data.map(item => {
                    return <PlayerCard key={item.id} data={item}/>
                })}
            </div>
        </>
    );
};

export default Players;