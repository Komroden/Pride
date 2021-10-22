import React from 'react';
import {LkHomeHeaderLinks} from "../LkHomeHeaderLinks";
import './style.scss';
import {useHistory} from "react-router";
export const LkHomeHeader = ({title}) => {
    const {push}=useHistory()
    const handlePushGuest=() => {
        push('/guest')
    }
    const handlePushUser=() => {
        push('/user')
    }
    const handlePushNewMessage=() => {
        push('/newMessage')
    }
    return (
        <header className="main_content_header">
            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span className="name_page_text">{title}</span>
            </div>
            <div className="main_content_header_right">
                <div className="links_header">
                    <LkHomeHeaderLinks url='/images/l1.png' openGuest={handlePushNewMessage} />
                    <LkHomeHeaderLinks url='/images/l2.png'/>
                    <LkHomeHeaderLinks url='/images/l3.png' color='yeallow_col' />
                    <LkHomeHeaderLinks url='/images/l4.png' color='dark_col' openGuest={handlePushGuest}/>
                </div>
                <div className="user_part">
                    <div className="user_part_text">
                        <div className="user_part_hi">Добрый день</div>
                        <div className="user_part_name">Natalia Familia</div>
                        <a href="#" className="user_part_exit">Выход</a>
                    </div>
                    <div onClick={handlePushUser} className="user_part_logo">
                        <div className="user_part_logo_img">
                            <img src="/images/user.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

