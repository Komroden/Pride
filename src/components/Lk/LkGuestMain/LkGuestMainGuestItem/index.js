import React from 'react';

export const LkGuestMainGuestItem = ({image,name,year,isOnline}) => {
    return (
        <div className="gost_item" style={{backgroundColor: "#fcf2ff"}} >
            <div className="gost_item_top">
                <div className="gost_item_logo" style={{backgroundImage: image}}/>
                <div className="gost_item_top_right">
                    <div className="gost_item_name">{name}</div>
                    <div className="gost_item_year">{year}</div>
                    <div className="gost_item_online">{isOnline}</div>
                </div>
            </div>
            <div className="gost_item_buttons">
                <a href="#" className="gost_item_send_mes">
                    <img src="/images/send_mess.png" alt=""/>
                    <span>Отправить сообщение</span>
                </a>
                <a href="#" className="gost_item_profile">
                    <img src="/images/prof.png" alt=""/>
                    <span>Профайл пользователя</span>
                </a>
            </div>
            <a href="#" className="gost_item_blocked">
										<span className="gost_item_blocked_img">
											<img src="/images/blocked.png" alt=""/>
										</span>
                <span className="gost_item_blocked_text">Заблокировать пользователя</span>
            </a>
        </div>
    );
};

