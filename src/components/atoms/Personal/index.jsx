import React from 'react';
import './styles.scss'
function Personal({ img, title, time }) {
    return (
        <div className='personal'>
            <div className="personal_avatar">
                <img style={{ width: '100%' }} src={img} alt="" />
            </div>
            <div className="personal_tile">
                <p>{title}</p>
                <p>Vai giay truoc</p>
            </div>
        </div>
    );
}

export default Personal;