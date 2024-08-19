import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
function BreadCrumItem({ isIcon, icon, title, href }) {
    return (
        <a href={href} className='itemcrum'>
            {isIcon && <MdKeyboardArrowRight />}
            {title}
        </a>
    );
}

export default BreadCrumItem;