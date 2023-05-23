import React from 'react';

const AboutItem = ({data}) => {
    return (
        <div className='task-item'>
            <div className="task-title">{data.name}</div>
            <div className='progress about-progress'>
                <div
                    style={{width: `${data.progress}%`}}
                    className='progress__inner'
                ></div>
                <div className='progress-exp'>{data.progress}%</div>
            </div>
        </div>
    );
};

export default AboutItem;