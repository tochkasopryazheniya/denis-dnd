import React from 'react';

const HeroesItem = ({data}) => {
    return (
        <div className='heroCard'>
            <img className='heroCard-avatar'
                 src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/267318677/original/c0dc84a227d35a0b89572bc87bc80b4863eeddd3/draw-fantasy-dnd-background-landscape-and-environment-art.jpg"
                 alt=""/>
            <div className="heroCard-info">
                <div className="heroCard-name">Богдан Титомир</div>
                <div className="heroCard-level">4 lvl</div>
            </div>
        </div>
    );
};

export default HeroesItem;