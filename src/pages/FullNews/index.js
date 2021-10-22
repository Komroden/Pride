import React from 'react';
import {Header} from "../../components/Header";
import {HeaderSimpleAbout} from "../../components/HeaderSimpleAbout";
import {Footer} from "../../components/Footer";
import {ContFullNews} from "../../components/ContFullNews";
import {MenuRight} from "../../components/MenuRight";
import {Timer} from "../../components/Timer";
import {Message} from "../../components/Message";

export const FullNews = () => {
    return (
        <div className="simple_page_standart bodyHome">
            <Header/>
            <HeaderSimpleAbout bread={'Полная новость'} title={'Полная новость'}/>
            <ContFullNews/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};

