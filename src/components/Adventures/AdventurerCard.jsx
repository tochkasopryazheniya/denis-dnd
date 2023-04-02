import React from 'react';
import {API_URL} from "../../http";
import {Link, useNavigate} from "react-router-dom";


const PlayersCard = ({data}) => {
    const navigate = useNavigate();

    const onHeroNavigate = (e, id) => {
        e.preventDefault();
        navigate(`/adventures/${id}`)
    }

    console.log(data)

    return (
        <Link to={`/adventures/${data.id}`}>
            <div className='playerCard'>
                <div className="heroCard-bio playerCard-bio">
                    <div className='playerCard-rating'>
                        <img src={`${API_URL}${data.attributes.icon.data[0].attributes.url}`} alt=""
                             className="playerCard-avatar"/>
                    </div>
                    <div>
                        <div className="playerCard-name">{data.attributes.name}</div>
                        <div className='playerCard-heroes'>
                            {/*<div style={{marginRight: '27px'}}>Персонажи:</div>*/}
                            {/*{data.attributes.heroes.data.map(hero => {*/}
                            {/*    return <img key={hero.id} onClick={(e) => onHeroNavigate(e, hero.id)} style={{marginRight: '10px'}} className='playerCard-hero'*/}
                            {/*                src={`${API_URL}${hero.attributes.avatar.data.attributes.url}`} alt=""/>*/}

                            {/*})}*/}
                        </div>
                        <div style={{marginTop: '20px'}} className='playerCard-heroes'>
                            <div style={{marginRight: '20px'}}>Миры:</div>
                            <img style={{marginRight: '10px'}} className='playerCard-hero'
                                 src={`${API_URL}${data.attributes.world.data.attributes.icon.data.attributes.url}`} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="heroCart-history">
                    <span>Описание</span>
                    <div>{`${data.attributes.description.slice(0, 300)}...`}</div>
                </div>
            </div>
        </Link>
    );
};

export default PlayersCard;