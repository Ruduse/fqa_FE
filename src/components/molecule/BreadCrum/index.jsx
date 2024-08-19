import React from 'react';
import BreadCrumItem from './BreadCrumItem';
import './styles.scss'
function BreadCrum({ listCrumb }) {
    return (
        <div className='breadcrumb'>
            {listCrumb.map((item, index) => (
                <BreadCrumItem isIcon={item.isIcon} href={item.href} title={item.title} key={index} />
            ))}
        </div>
    );
}

export default BreadCrum;