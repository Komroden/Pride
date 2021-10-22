import React from 'react';


export const LkLeftMenuOpenSubmenu = ({title,path}) => {

    return (
        <li>
            <a href={path} >{title}</a>
        </li>
    );
};

