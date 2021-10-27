import React from 'react';
import {useHistory} from "react-router";


export const LkLeftMenuOpenSubmenu = ({title,path}) => {
    const {push}=useHistory()
    const handlePush=() => {
        push(path)
    }

    return (
        <li>
            <a onClick={handlePush} >{title}</a>
        </li>
    );
};

