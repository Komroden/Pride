import React from 'react';
import {useHistory} from "react-router";

export const LkHomeHeaderLinks = ({url,color,path}) => {
    const {push}=useHistory()
    const handlePush=(e) => {
        e.preventDefault()
        push(path)
    }
    return (
        <div className="links_header_item">
            <a href={'/'}  onClick={handlePush}>
                <img src={url} alt=""/>
                <span className={'links_header_item_number '+color} >99</span>
            </a>
        </div>
    );
};

