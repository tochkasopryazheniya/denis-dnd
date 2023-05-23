import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {API_URL} from "../../http";

const WorldsItem = ({data}) => {
    const navigate = useNavigate();

    const onAdventureNavigate = (e, id) => {
        e.preventDefault();
        navigate(`/adventures/${id}`)
    }
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
                        <div style={{marginTop: '20px'}} className='playerCard-heroes'>
                            <div style={{marginRight: '20px'}}>Приключения:</div>
                            {data.attributes.adventures.data.map(item => {
                                // return <Link key={item.id} to={`/adventures/${item.id}`}>
                                //     <img style={{marginRight: '10px'}} className='playerCard-hero'
                                //          src={`${API_URL}${item.attributes.icon.data.attributes.url}`}
                                //          alt=""/>
                                // </Link>
                                return (
                                    <img key={item.id} onClick={(e) => onAdventureNavigate(item.id)} style={{marginRight: '10px'}} className='playerCard-hero'
                                         src={`${API_URL}${item.attributes.icon.data.attributes.url}`}
                                         alt=""/>
                                )
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