import React from 'react';
import {Header} from "../../components/Header";

import {Footer} from "../../components/Footer";
import {ContRegister} from "../../components/ContRegister";
import {MenuRight} from "../../components/MenuRight";
import {Timer} from "../../components/Timer";
import {Message} from "../../components/Message";

export const Registration = () => {
    return (
        <div className='login bodyHome'>
            <div className='bg_pink'/>
            <Header/>
            <ContRegister/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};

