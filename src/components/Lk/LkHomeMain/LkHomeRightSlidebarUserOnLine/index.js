import React from 'react';


export const LkHomeRightSlidebarUserOnLine = ({img}) => {

    const handlePush=(e) => {
        e.preventDefault()

    }
    return (
        <a href={'/'} onClick={handlePush} className="now_on_site_item">
        <img src={img} alt=""/>
         </a>
    );
};

