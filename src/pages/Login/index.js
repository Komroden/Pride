import React from 'react';
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {ContLogin} from "../../components/ContLogin";
import {MenuRight} from "../../components/MenuRight";
import {Timer} from "../../components/Timer";
import {Message} from "../../components/Message";

export const Login = () => {
    return (
        <div className='login bodyHome'>
            <div className='bg_pink'/>
            <Header/>
            <ContLogin/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};

