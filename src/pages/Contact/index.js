import React from 'react';

import {Footer} from "../../components/Home/Footer";
import {HeaderSimpleAbout} from "../../components/Home/Header/HeaderSimpleAbout";
import {Header} from "../../components/Home/Header";
import {ContactTabs} from "../../components/Home/ContactTabs";
import {ContactForm} from "../../components/Home/ContactForm";
import {MenuRight} from "../../components/Home/MenuRight";
import {Timer} from "../../components/Home/Timer";
import {Message} from "../../components/Home/Message";


export const Contact = () => {
    return (

        <div className="simple_page_standart bodyHome">
            <Header activeCont={'active'}/>
            <HeaderSimpleAbout bread={'Контакты'} title={'Контакты'}/>
            <ContactTabs/>
            <ContactForm/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};