import React from 'react';

import {Footer} from "../../components/Footer";
import {HeaderSimpleAbout} from "../../components/HeaderSimpleAbout";
import {Header} from "../../components/Header";
import {ContAbout} from "../../components/ContAbout";
import {MenuRight} from "../../components/MenuRight";
import {Timer} from "../../components/Timer";
import {Message} from "../../components/Message";

export const About = () => {
    return (

            <div className="simple_page_standart bodyHome">
                <Header activeAbout={'active'}/>
            <HeaderSimpleAbout bread={'О нас'} title={'О Компании'}/>
            <ContAbout/>
            <Footer/>
                <MenuRight/>
                <Timer />
                <Message/>
            </div>
    );
};

