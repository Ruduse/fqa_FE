import React from 'react';
import './styles.scss'
import ItemList from '~/components/atoms/ItemList';
import { sidebar } from '~/fakes';
function SideBar({ pathCurrentPage }) {

    return (
        <div className='sidebar'>
            {sidebar.map(({ id, href, title, icon }) => (
                <ItemList key={id} href={href} title={title} icon={icon} isActive={href === '/all'} />
            ))}
        </div>
    );
}

export default SideBar;