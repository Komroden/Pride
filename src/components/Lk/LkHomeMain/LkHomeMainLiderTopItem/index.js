import React from 'react';

export const LkHomeMainLiderTopItem = ({url,number,isVisible}) => {
    const handlePush=(e)=>{
        e.preventDefault()
    }
    return (
        <div className={isVisible?"lider_top_item hidden ":'lider_top_item visible '} >
            <a href="/" onClick={handlePush} className="lider_top_item_link">
									<span className="lider_top_item_img">
										<img src={url} alt=""/>
									</span>
                <span className="green_lin"></span>
                <span className="number_lin">{number}</span>
            </a>
        </div>
    );
};

