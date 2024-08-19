import React from 'react';

function Marquee({ icon, title }) {
    return (
        <div className='marquee'>
            <img src={icon} alt='' />
            <marquee>
                {title}
            </marquee>
        </div>
    );
}

export default Marquee;