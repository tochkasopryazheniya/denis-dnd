import React from 'react';
import Header from "../components/Header/Header";
import {API_URL} from "../http";
import axios from "axios";
import {useQuery} from "react-query";
import Loader from "../components/Loader/Loader";
import HeroesItem from "../components/Heroes/HeroesItem";

const fetchHeroes = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/heroes?populate=deep,3`);
        console.log(response.data.data)
        return response.data.data
    } catch (e) {
        console.log(e)
    }
}

const Heroes = () => {
    const {data, isError, isLoading} = useQuery('heroes', fetchHeroes);


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
                <div className='heroCards'>
                    {data.map(data => {
                        return <HeroesItem key={data.id} data={data}/>
                    })}

                </div>
            </div>
        </>
    );
};

export default Heroes;