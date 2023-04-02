import React from 'react';

const PlayerItem = ({data}) => {
    return (
        <div className='playerItem'>
            <h1>{data.attributes.name}</h1>
        </div>
    );
};

export default PlayerItem;