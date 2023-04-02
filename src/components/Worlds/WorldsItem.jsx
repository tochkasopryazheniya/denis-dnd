import React from 'react';
import {Link} from "react-router-dom";
import {API_URL} from "../../http";

const WorldsItem = ({data}) => {
    return (
        <Link to={`/worlds/${data.id}`}>
            <div className='playerCard'>
                <div className="heroCard-bio playerCard-bio">
                    <div className='playerCard-rating'>
                        <img src={`${API_URL}${data.attributes.icon.data.attributes.url}`} alt=""
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
                            <div style={{marginRight: '20px'}}>Приключения:</div>
                            {data.attributes.adventures.data.map(item => {
                                return <Link key={item.id} to={`/adventures/${item.id}`}>
                                    <img style={{marginRight: '10px'}} className='playerCard-hero'
                                         src={`${API_URL}${item.attributes.icon.data[0].attributes.url}`}
                                         alt=""/>
                                </Link>
                            })}

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

export default WorldsItem;