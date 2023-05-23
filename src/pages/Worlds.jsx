import React from 'react';
import Header from "../components/Header/Header";
import axios from "axios";
import {API_URL} from "../http";
import {useQuery} from "react-query";
import Loader from "../components/Loader/Loader";
import WorldsItem from "../components/Worlds/WorldsItem";

const fetchWorlds = async() => {
    const {data} = await axios.get(`${API_URL}/api/worlds?populate=deep,3`);

    return data.data;
}

const Worlds = () => {
    const {data, isLoading, isError} = useQuery('worlds', fetchWorlds);


    if (isLoading) {
        return <Loader/>
    }

    if (isError) {
        alert('ОШИБКА')
    }


    return (
        <>
            <Header/>
            <div className="container">
                {data.map(item => {
                    return <WorldsItem key={item.id} data={item}/>
                })}
            </div>
        </>
    );
};

export default Worlds;