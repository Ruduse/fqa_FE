import React from 'react';
import './styles.scss';
function ItemList({ icon, title, href, isActive }) {
  return (
    <a href={href}>
      <div className={`item ${isActive ? 'active' : ''}`}>
        <img src={icon} alt="" />
        {title}
      </div>
    </a>
  );
}

export default ItemList;
