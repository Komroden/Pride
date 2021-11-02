import React from 'react';

export const RegistItem = ({date,object}) => {
    return (
        <li >
            <span className="left_stat">{date}</span>
            <span className="left_user">{object}</span>
        </li>
    );
};

