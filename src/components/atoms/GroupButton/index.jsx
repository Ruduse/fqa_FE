import React, { useState } from 'react';
import Button from '../Button';
import './styles.scss'

function GroupButton({ listBtn, onAction }) {
    const [active, setActive] = useState(1)
    return (
        <div className='group'>
            {listBtn.map((item) => (
                <Button title={item.title} backgroundColor={`${active === item.id ? "black" : "transparent"}`} color={`${active === item.id ? "white" : "black"}`} type='small' onAction={() => {
                    setActive(item.id)
                    // onAction(item)
                }} />
            ))}

        </div>
    );
}

export default GroupButton;