import React from 'react';
import './styles.scss';
function Button({ leadingIcon, tailIcon, title, onAction, type = "medium", ...rest }) {
    return (
        <button style={rest} className={`button ${type}`} onClick={onAction} >
            {leadingIcon && <img src={leadingIcon} alt='' />}
            {title}
            {tailIcon && tailIcon}
        </button >
    );
}

export default Button;
