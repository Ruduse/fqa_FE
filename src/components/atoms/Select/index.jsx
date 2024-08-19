import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import './styles.scss'
function Select({ options }) {
    const [option, setOption] = useState(options[0])
    const [show, setShow] = useState(false)
    const handleSelect = (option) => {
        setOption(option)
    }
    return (
        <div>
            <div className='select' onClick={() => setShow(!show)} >
                {option.title}
                <IoIosArrowDown />
                {show && <div className='select_list'>
                    {options.map((item) => (
                        <div className="select_item" onClick={() => handleSelect(item)}>{item.title}</div>
                    ))}
                </div>}
            </div>

        </div>
    );
}

export default Select;