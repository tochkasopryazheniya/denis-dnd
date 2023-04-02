import React from 'react';
import Header from "../components/Header/Header";
import axios from "axios";
import {API_URL} from "../http";
import {useQuery} from "react-query";
import Loader from "../components/Loader/Loader";
import AdventurerCard from "../components/Adventures/AdventurerCard";

const fetchAdventures = async () => {
    const {data} = await axios.get(`${API_URL}/api/adventures?populate=deep,3`);
    return data.data;
}

const Adventures = () => {
    const {data, isError, isLoading} = useQuery('allAdventures', fetchAdventures);

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
                    return <AdventurerCard key={item.id} data={item}/>
                })}
            </div>
        </>
    );
};

export default Adventures;