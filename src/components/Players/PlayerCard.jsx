import React from 'react';
import {API_URL} from "../../http";
import {Link, useNavigate} from "react-router-dom";
import star from '../../assets/img/star.png'

const PlayersCard = ({data}) => {
    const navigate = useNavigate();

    const onHeroNavigate = (e, id) => {
        e.preventDefault();
        navigate(`/heroes/${id}`)
    }

    return (
        <Link to={`/players/${data.id}`}>
            <div className='playerCard'>
                <div className="heroCard-bio playerCard-bio">
                    <div className='playerCard-rating'>
                        <img src={`${API_URL}${data.attributes.avatar.data.attributes?.url}`} alt=""
                             className="playerCard-avatar"/>
                        <div className='playerCard-rating-mobile'>
                            <img src={star} alt=""/>
                            <span>{data.attributes.rating}</span>
                        </div>
                    </div>
                    <div>
                        <div className="playerCard-name">{data.attributes.name}</div>
                        <div className='playerCard-heroes'>
                            <div style={{marginRight: '27px'}}>Персонажи:</div>
                            {data.attributes?.heroes?.data.map(hero => {
                                return <img key={hero.id} onClick={(e) => onHeroNavigate(e, hero.id)} style={{marginRight: '10px'}} className='playerCard-hero'
                                            src={`${API_URL}${hero.attributes.avatar.data.attributes.url}`} alt=""/>

                            })}
                        </div>
                        <div style={{marginTop: '20px'}} className='playerCard-heroes'>
                            <div style={{marginRight: '20px'}}>Достижения:</div>
                            {data.attributes.achievements?.data?.length ? (
                                data.attributes.achievements?.data?.map(achiev => {
                                        return <img key={achiev.id} style={{marginRight: '10px'}} className='playerCard-hero'
                                                    title={achiev.attributes.name}
                                                    src={`${API_URL}${achiev.attributes.avatar.data.attributes.url}`} alt=""/>
                                    })
                            ) : (
                                '-'
                            )}
                        </div>
                    </div>
                </div>
                <div className="heroCart-history">
                    <span>Описание</span>
                    <div>{`${data.attributes.description.slice(0, 300)}...`}</div>
                </div>
                <div className="heroCart-exp">
                    <span>Рейтинг</span>
                    <div className='heroCart-exp-number'>{data.attributes.rating}</div>
                </div>
            </div>
        </Link>
    );
};

export default PlayersCard;