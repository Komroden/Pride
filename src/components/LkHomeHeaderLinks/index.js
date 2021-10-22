import React from 'react';

export const LkHomeHeaderLinks = ({url,color,openGuest}) => {
    return (
        <div className="links_header_item">
            <a onClick={openGuest}>
                <img src={url} alt=""/>
                <span className={'links_header_item_number '+color} >99</span>
            </a>
        </div>
    );
};

