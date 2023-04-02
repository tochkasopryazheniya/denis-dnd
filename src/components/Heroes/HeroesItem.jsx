import React from 'react';
import {API_URL} from "../../http";
import {Link} from "react-router-dom";

const HeroesItem = ({data}) => {
    return (
        <Link className='heroCard' to={`/heroes/${data.id}`}>
            <img className='heroCard-avatar'
                 src={`${API_URL}${data.attributes.avatar.data.attributes.url}`}
                 alt=""/>
            <div className="heroCard-info">
                <div className="heroCard-name">{data.attributes.name}</div>
                <div className="heroCard-level">{data.attributes.level} lvl</div>
            </div>
        </Link>
    );
};

export default HeroesItem;