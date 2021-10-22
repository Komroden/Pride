import React from 'react';
import {Header} from "../../components/Header";
import {HeaderSimpleFaq} from "../../components/HeaderSimpleFaq";
import {ContFaq} from "../../components/ContFaq";
import {Footer} from "../../components/Footer";
import {MenuRight} from "../../components/MenuRight";
import {Timer} from "../../components/Timer";
import {Message} from "../../components/Message";


export const Faq = () => {
    return (
        <div className="simple_page_standart bodyHome">
            <Header activeFaq={'active'}/>
            <HeaderSimpleFaq bread={'Faq'} title={'Faq'}/>
            <ContFaq/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};

