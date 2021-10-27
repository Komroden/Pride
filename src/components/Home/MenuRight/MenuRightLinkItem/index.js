import React from 'react';
import {useHistory} from "react-router";

export const MenuRightLinkItem = ({path,title,linkClassName}) => {
    const {push}=useHistory()
    const handlePush=() => {
        push(path)
    }
    return (
        <a className={linkClassName?linkClassName:''} onClick={handlePush}>{title}</a>
    );
};

