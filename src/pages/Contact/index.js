import React from 'react';

import {Footer} from "../../components/Footer";
import {HeaderSimpleAbout} from "../../components/HeaderSimpleAbout";
import {Header} from "../../components/Header";
import {ContactTabs} from "../../components/ContactTabs";
import {ContactForm} from "../../components/ContactForm";
import {MenuRight} from "../../components/MenuRight";
import {Timer} from "../../components/Timer";
import {Message} from "../../components/Message";


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